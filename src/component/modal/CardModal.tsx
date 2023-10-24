import './styles.css';

interface CustomModalProps {
    show: boolean;
    handleClose: () => void;
}


export const CustomModal: React.FC<CustomModalProps> = ({ show, handleClose }) => {
    const modalStyle: React.CSSProperties = {
        display: show ? 'block' : 'none',
    };
    const overlayStyle: React.CSSProperties = {
        display: show ? 'block' : 'none',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.30)',
        zIndex: 1000,
    };

    return (<>
        <div className="overlay" style={overlayStyle}></div>
        
        <div className="modal" style={modalStyle}>
            
            <div className="modal-content">
                <div className='card-wrapper'>
                    <div className='card-description'>
                    <div className='close-icon flex' onClick={() => handleClose()}>
                            <span className='fs-20 fw-600'  >x</span>
                        </div>
                        <div className='card-description-header'>
                            <div className='card-label'><span className='label'>Nangita</span></div>
                            <span className='card-date-label'>Due Date : 19 Oct, 2023</span>
                        </div>
                        <div className='filter-section'>
                            <div className="description-lable">
                                <span className='label fs-18 fw-500'>Description</span>
                                <img className='edit' src="assets/icon/Edit.png" />
                            </div>
                            <div className="filter-drop-down">
                                <img src='assets/icon/upArrow.png' />
                                <span className='fs-18 fw-400'>Very high</span>
                                <img src='assets/icon/Stroke.svg' />
                            </div>
                        </div>
                        <div className='description-section'>
                            <p className='description'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                                standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
                                it to make a type specimen book. It has survived not only five centuries.
                            </p>
                        </div>
                        <div className='comment-section'>
                            <span className='comment-section-label'>Comments</span>
                            <div className='comment-section-input'>
                                <div className="comment-section-user br-8 flex ai-center  jc-center">
                                    <span className="fs-26 fw-700">B</span>
                                </div>
                                <div className='comment-section-input-field'>
                                    add seach section
                                </div>
                            </div>
                        </div>
                        <div className='card-info-section'>
                            <div className="card-info-section-user br-8 flex ai-center  jc-center">
                                <span className="fs-26 fw-700">B</span>
                            </div>
                            <div className='card-info-details'>
                                <div className='card-user-info-details'>
                                    <span className='user-name'>Brooklyn Simmons</span>
                                    <span className='time'>4 minutes ago</span>
                                </div>
                                <div className='card-user-info-sample-text'>
                                    <span>Lorem Ipsum is simply dummy text.</span>
                                </div>
                                <div className='card-user-info-action-btn'>
                                    <div className='action-btn' >
                                        <img src="assets/icon/Edit-img.svg" alt="" />
                                    </div>
                                    <div className='action-btn' >
                                        <img src="assets/icon/delete.svg" alt="" />
                                    </div>
                                    <div className='action-btn' >
                                        <img src="assets/icon/emoji-smile.svg" alt="" />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='card-details'>
                      
                        <div className='to-do-drop-down-section'>
                            <span>To Do</span>
                            <img className='down' src="assets/icon/down.svg" alt="" />
                        </div>
                        <div className='detailsdrop-down-section'>
                            <div className='detailsdrop-down'>
                                <span>Details</span>
                                <img className='down' src="assets/icon/down.svg" alt="" />
                            </div>
                        </div>
                        <div className='log-time-checker'>
                            <span className='time'>Created 2 hour ago</span>
                            <span className='time'>Created 2 hour ago</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>);
};