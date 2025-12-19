'use client';
import React, { useState, useEffect, useMemo } from 'react';
import { HelpCircle, Plus, Edit, Trash2, CheckCircle, XCircle, Search } from 'lucide-react';
import DashboardLayout from '../dashboard/layout';
import './faqs.css';

const ITEMS_PER_PAGE = 5;

export default function FaqsPage() {
    const [faqs, setFaqs] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalType, setModalType] = useState(null);
    const [currentFaq, setCurrentFaq] = useState(null);
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    const [error, setError] = useState('');
    const [toast, setToast] = useState({ show: false, message: '', type: '' });
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);

    const showToast = (message, type = 'success') => {
        setToast({ show: true, message, type });
        setTimeout(() => setToast({ show: false, message: '', type: '' }), 3000);
    };

    const fetchFaqs = async () => {
        try {
            const res = await fetch('/api/faqs/all');
            if (!res.ok) throw new Error('Failed to fetch');
            const data = await res.json();
            setFaqs(data);
        } catch (err) {
            showToast('Failed to fetch FAQs', 'error');
        }
    };

    useEffect(() => {
        fetchFaqs();
    }, []);

    const filteredFaqs = useMemo(() => {
        return faqs.filter(faq =>
            faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
            faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [faqs, searchTerm]);

    const paginatedFaqs = useMemo(() => {
        const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
        return filteredFaqs.slice(startIndex, startIndex + ITEMS_PER_PAGE);
    }, [filteredFaqs, currentPage]);

    const totalPages = Math.ceil(filteredFaqs.length / ITEMS_PER_PAGE);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
        setCurrentPage(1);
    };

    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };

    const handleOpenModal = (type, faq = null) => {
        setModalType(type);
        setCurrentFaq(faq);
        setIsModalOpen(true);
        setQuestion(faq ? faq.question : '');
        setAnswer(faq ? faq.answer : '');
        setError('');
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleSave = async () => {
        if (!question.trim() || !answer.trim()) {
            setError('Question and Answer cannot be empty!');
            return;
        }
        setError('');
        try {
            const response = await fetch('/api/faqs', {
                method: modalType === 'add' ? 'POST' : 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(modalType === 'add' ? { question, answer } : { id: currentFaq.id, question, answer }),
            });
            if (!response.ok) throw new Error('Failed to save FAQ');
            await fetchFaqs();
            handleCloseModal();
            showToast(modalType === 'add' ? 'FAQ added successfully!' : 'FAQ updated successfully!');
        } catch (err) {
            showToast('Failed to save FAQ', 'error');
        }
    };

    const handleDelete = async () => {
        try {
            const response = await fetch('/api/faqs', {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id: currentFaq.id }),
            });
            if (!response.ok) throw new Error('Failed to delete FAQ');
            await fetchFaqs();
            handleCloseModal();
            showToast('FAQ deleted successfully!');
        } catch (err) {
            showToast('Failed to delete FAQ', 'error');
        }
    };

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleString('en-IN', {
            day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit',
        });
    };

    return (
        <DashboardLayout>
            <div className="faqs-page">
                <header className="page-header">
                    <h1>Manage FAQs</h1>
                    <div className="header-actions">
                        <div className="search-box">
                            <Search size={18} className="search-icon" />
                            <input
                                type="text"
                                placeholder="Search FAQs..."
                                value={searchTerm}
                                onChange={handleSearchChange}
                            />
                        </div>
                    </div>
                    <button className="add-button" onClick={() => handleOpenModal('add')}>
                        <Plus size={18} />
                        Add FAQ
                    </button>
                </header>

                <div className="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Sr. No.</th>
                                <th>Question</th>
                                <th>Answer</th>
                                <th>Created At</th>
                                <th>Updated At</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {paginatedFaqs.length > 0 ? (
                                paginatedFaqs.map((faq, index) => (
                                    <tr key={faq.id}>
                                        <td>{(currentPage - 1) * ITEMS_PER_PAGE + index + 1}</td>
                                        <td className="faq-question">{faq.question}</td>
                                        <td className="faq-answer">{faq.answer}</td>
                                        <td>{formatDate(faq.created_at)}</td>
                                        <td>{formatDate(faq.updated_at)}</td>
                                        <td>
                                            <div className="action-buttons">
                                                <button onClick={() => handleOpenModal('edit', faq)} title="Edit"><Edit size={16} /></button>
                                                <button onClick={() => handleOpenModal('delete', faq)} title="Delete" className="delete"><Trash2 size={16} /></button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="6" style={{ textAlign: 'center', padding: '20px' }}>
                                        No FAQs found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {totalPages > 1 && (
                    <div className="pagination-controls">
                        <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                            Previous
                        </button>
                        <span>
                            Page {currentPage} of {totalPages}
                        </span>
                        <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                            Next
                        </button>
                    </div>
                )}

                {isModalOpen && (
                    <div className="modal-overlay" onClick={handleCloseModal}>
                        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                            {(modalType === 'add' || modalType === 'edit') && (
                                <>
                                    <h2>{modalType === 'add' ? 'Add New FAQ' : 'Edit FAQ'}</h2>
                                    <div className="form-group">
                                        <label htmlFor="question">Question</label>
                                        <input id="question" type="text" value={question} onChange={(e) => setQuestion(e.target.value)} placeholder="Enter the question" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="answer">Answer</label>
                                        <textarea id="answer" value={answer} onChange={(e) => setAnswer(e.target.value)} placeholder="Enter the answer"></textarea>
                                        {error && <p className="error-message">{error}</p>}
                                    </div>
                                    <div className="modal-actions">
                                        <button onClick={handleCloseModal} className="cancel">Cancel</button>
                                        <button onClick={handleSave} className="save">Save Changes</button>
                                    </div>
                                </>
                            )}
                            {modalType === 'delete' && (
                                <>
                                    <h2>Confirm Deletion</h2>
                                    <p>Are you sure you want to delete this FAQ: <strong>"{currentFaq.question}"</strong>?</p>
                                    <p className="warning">This action cannot be undone.</p>
                                    <div className="modal-actions">
                                        <button onClick={handleCloseModal} className="cancel">Cancel</button>
                                        <button onClick={handleDelete} className="delete-confirm">Yes, Delete</button>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                )}

                {toast.show && (
                    <div className={`toast ${toast.type === 'success' ? 'toast-success' : 'toast-error'}`}>
                        {toast.type === 'success' ? <CheckCircle size={20} /> : <XCircle size={20} />}
                        <span>{toast.message}</span>
                    </div>
                )}
            </div>
        </DashboardLayout>
    );
}
