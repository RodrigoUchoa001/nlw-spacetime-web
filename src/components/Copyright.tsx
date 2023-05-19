export default function Copyright(){
    return (
        <div className='text-sm leading-relaxed text-gray-200'>
          Feito com 💜 no NLW da {' '}
          <a 
            target='_blank' //PRA ABRIR UMA NOVA ABA
            rel='noreferrer' //PRA EVITAR UNS PROBLEMA DE SEGURANÇA
            href="https://rocketseat.com.br" 
            className='underline hover:text-gray-100'
          >
              Rocketseat
          </a>
        </div>
    );
}