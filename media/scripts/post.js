new Vue({
	el: '#post',
	data() {
		return {
			scrolled: false,
			showToc: false,
			showMenu: false,
		}
	},
	computed: {
		text() {
			return encodeURIComponent(document.title)
		},
		url() {
			return decodeURIComponent(window.location.href)
		}
	},
	mounted() {
		window.addEventListener('scroll', this.navOnScroll);
	},
	methods: {
		oepnUrl(url) {
			window.open(url, '_blank')
		},
		navOnScroll() {
			if (window.scrollY > 20) {
				this.scrolled = true
			} else {
				this.scrolled = false
			}
		},
		backToUp() {
			window.scrollTo(0, 0)
		},
		shareCustom() {
			// 复制到粘贴板
			const input = document.createElement('input');
			input.setAttribute('readonly', 'readonly');
			input.setAttribute('value', this.url);
			document.body.appendChild(input);
			input.select();
			if (!document.execCommand('copy')) {
				document.execCommand('copy');
				// Toast('链接已复制');
			};
		},
	},
});