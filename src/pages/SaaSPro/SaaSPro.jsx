import { AppProvider, useApp } from './context/AppContext.jsx'
import Layout from './components/Layout/Layout.jsx'
import Dashboard from './pages/Dashboard/Dashboard.jsx'
import Calendar from './pages/Calendar/Calendar.jsx'
import Services from './pages/Services/Services.jsx'
import Gains from './pages/Gains/Gains.jsx'
import Reports from './pages/Reports/Reports.jsx'
import Settings from './pages/Settings/Settings.jsx'
import Modal from './components/UI/Modal/Modal.jsx'
import ToastContainer from './components/UI/Toast/ToastContainer.jsx'
import './saaspro-global.css'

function AppContent() {
  const { currentPage, isModalOpen, closeModal, toasts } = useApp()

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard': return <Dashboard />
      case 'calendario': return <Calendar />
      case 'servicos': return <Services />
      case 'ganhos': return <Gains />
      case 'relatorios': return <Reports />
      case 'configuracoes': return <Settings />
      default: return <Dashboard />
    }
  }

  return (
    // O WRAPPER MÁGICO QUE ISOLA TUDO
    <div className="saaspro-app">
      <Layout>
        {renderPage()}
      </Layout>
      
      {isModalOpen('appt') && (
        <Modal modalId="appt" title="Novo Agendamento" onClose={() => closeModal('appt')}>
          <div className="modal-appt-content">
            <p>Formulário de agendamento aqui</p>
          </div>
        </Modal>
      )}
      
      {isModalOpen('service') && (
        <Modal modalId="service" title="Adicionar Serviço" onClose={() => closeModal('service')}>
          <div className="modal-service-content">
            <p>Formulário de serviço aqui</p>
          </div>
        </Modal>
      )}
      
      {isModalOpen('transacao') && (
        <Modal modalId="transacao" title="Nova Transação" onClose={() => closeModal('transacao')}>
          <div className="modal-transacao-content">
            <p>Formulário de transação aqui</p>
          </div>
        </Modal>
      )}
      
      <ToastContainer toasts={toasts} />
    </div>
  )
}

export default function SaaSPro() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  )
}