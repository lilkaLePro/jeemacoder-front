// Modal.tsx
import React from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useRouter } from 'next/navigation';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const router = useRouter();

  const handleBack = () => {
    router.push('/listeHackathon'); // Remplacez '/listeHackathon' par le lien vers lequel vous souhaitez rediriger
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" onClick={onClose}>
      <div className="bg-white p-5 rounded-lg max-w-4xl w-11/12 max-h-90vh overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <button onClick={handleBack} className="float-left cursor-pointer flex items-center">
          <AiOutlineArrowLeft className="mr-2" /> Retour
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
