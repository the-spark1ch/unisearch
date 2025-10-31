document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('search-form');
    const input = document.getElementById('search-input');
    const buttons = document.querySelectorAll('.engine-btn');
    let selectedEngine = 'google';

    document.querySelector('[data-engine="google"]').classList.add('active');

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            selectedEngine = btn.dataset.engine;
        });
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const query = encodeURIComponent(input.value);
        if (query && selectedEngine) {
            let url;
            switch (selectedEngine) {
                case 'google':
                    url = `https://www.google.com/search?q=${query}`;
                    break;
                case 'bing':
                    url = `https://www.bing.com/search?q=${query}`;
                    break;
                case 'yahoo':
                    url = `https://search.yahoo.com/search?p=${query}`;
                    break;
                case 'duckduckgo':
                    url = `https://duckduckgo.com/?q=${query}`;
                    break;
                case 'yandex':
                    url = `https://yandex.com/search/?text=${query}`;
                    break;
                case 'baidu':
                    url = `https://www.baidu.com/s?wd=${query}`;
                    break;
                case 'ecosia':
                    url = `https://www.ecosia.org/search?q=${query}`;
                    break;
                case 'startpage':
                    url = `https://www.startpage.com/do/search?q=${query}`;
                    break;
                case 'ask':
                    url = `https://www.ask.com/web?q=${query}`;
                    break;
                case 'aol':
                    url = `https://search.aol.com/aol/search?q=${query}`;
                    break;
                case 'wolframalpha':
                    url = `https://www.wolframalpha.com/input?i=${query}`;
                    break;
                case 'qwant':
                    url = `https://www.qwant.com/?q=${query}`;
                    break;
                case 'brave':
                    url = `https://search.brave.com/search?q=${query}`;
                    break;
                case 'mojeek':
                    url = `https://www.mojeek.com/search?q=${query}`;
                    break;
                case 'swisscows':
                    url = `https://swisscows.com/web?query=${query}`;
                    break;
                case 'searx':
                    url = `https://searx.space/`;
                    break;
                default:
                    url = `https://www.google.com/search?q=${query}`;
            }
            window.location.href = url;
        }
    });
});