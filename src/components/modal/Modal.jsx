import React, { useState, useRef, useEffect } from 'react';
import styles from './Modal.module.scss'; // Modal uchun stil

const Modal = ({ title }) => {
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Agar modal va button tashqarisiga bosilsa, modalni yopamiz
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setShowModal(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.modalWrapper}>
      {/* Button */}
      <button ref={buttonRef} onClick={() => setShowModal(!showModal)}>
        {showModal ? 'Modalni yopish' : 'Modalni ochish'}
      </button>

      {/* Modal */}
      {showModal && (
        <div ref={modalRef} className={styles.modalContent}>
          <p>{title}</p>
        </div>
      )}
    </div>
  );
};

export default Modal;
