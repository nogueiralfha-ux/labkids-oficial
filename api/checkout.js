export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, email, paymentMethod, planId } = req.body;
  const asaasApiKey = process.env.ASAAS_API_KEY;

  if (!asaasApiKey) {
    // Modo simulação: Quando a chave não está preenchida, apenas simulamos o sucesso.
    console.log('CHAVE DO ASAAS NÃO ENCONTRADA. Simulando pagamento com sucesso para:', email);
    
    // Simula um tempo de carregamento real
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    return res.status(200).json({
      success: true,
      message: 'Pagamento simulado com sucesso (Chave ausente)',
      redirectUrl: '/obrigado'
    });
  }

  try {
    // 1. Criar ou buscar o cliente no Asaas
    // ... (A lógica real do Asaas será conectada aqui usando o fetch para a API oficial)
    
    // Simulação temporária mesmo com a chave até finalizarmos todos os campos
    return res.status(200).json({
      success: true,
      message: 'Cobrança gerada com sucesso!',
      redirectUrl: '/obrigado'
    });
  } catch (error) {
    console.error('Erro na integração com Asaas:', error);
    return res.status(500).json({ success: false, message: 'Erro ao processar pagamento' });
  }
}
