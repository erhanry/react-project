import { memo } from 'react';

const ConfirmationModal = ({
    closeModal,
    onDeleteClick
}) => {
    return (
        <>
            <div tabIndex="-1" className="modal">
                <div className="modal-dialog modal-sm">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Желаете ли да изтриете книгата?</h5>
                            <button className="close" onClick={closeModal}>×</button>
                        </div>
                        <div className="modal-body">
                            <p className="text-center">
                                <button className="btn btn-outline-secondary" onClick={closeModal}> Откас</button>
                                <button className="btn btn-outline-danger" onClick={onDeleteClick}><i className="fa fa-trash"></i> Delete</button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal-backdrop"></div>
        </>
    );
};

export default memo(ConfirmationModal);
