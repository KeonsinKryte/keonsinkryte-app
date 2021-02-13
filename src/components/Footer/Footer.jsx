import React, { Component } from "react";

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="footer__container container">
                    <div className="footer__topcontent col-12">
                        <article className="footer__contact col-6">
                            <a href="mailto:mauro@keonsinkryte.com">
                                <h3>Don't be afraid, <br />
                            Contact me! <span role="img" aria-label="Hiding laugh">🤭</span></h3>  {/*"Icon made by Pixel perfect from www.flaticon.com"*/} <br />
                                <div className="footer__contactinner">
                                    <img src="data:image/svg+xml;base64,
PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIj48Zz48Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0zODQsMTI4SDEyOGMtMTEuMTA0LDAtMjEuNjk2LDEuODU2LTMyLDQuNTQ0Vjk2aDExMmM4LjgzMiwwLDE2LTcuMTY4LDE2LTE2VjE2YzAtOC44MzItNy4xNjgtMTYtMTYtMTZIODAgICAgYy04LjgzMiwwLTE2LDcuMTY4LTE2LDE2djEyOS43OTJDMjUuOTIsMTY4LDAsMjA4LjgzMiwwLDI1NnYxNzZjMCw4LjgzMiw3LjE2OCwxNiwxNiwxNmgyNzJ2NDhjMCw4LjgzMiw3LjE2OCwxNiwxNiwxNmgzMiAgICBjOC44MzIsMCwxNi03LjE2OCwxNi0xNnYtNDhoMTQ0YzguODMyLDAsMTYtNy4xNjgsMTYtMTZWMjU2QzUxMiwxODUuMzEyLDQ1NC42ODgsMTI4LDM4NCwxMjh6IE0yMjQsNDE2SDMyVjI1NiAgICBjMC01Mi45MjgsNDMuMDcyLTk2LDk2LTk2YzUyLjkyOCwwLDk2LDQzLjA3Miw5Niw5NlY0MTZ6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBzdHlsZT0iZmlsbDojRkZGRkZGIj48L3BhdGg+Cgk8L2c+CjwvZz48L2c+IDwvc3ZnPg==" alt="Contact me via e-mail" /> <h3> | mauro@KeonsinKryte.com <span role="img" aria-label="Rocket">🚀</span></h3>
                                </div>
                            </a>
                            <h4>©-KeonsinKryte 2021</h4>
                        </article>
                        <article className="footer__media col-6">
                            <div className="footer__mediainner">
                                <a href="https://www.linkedin.com/in/keonsinkryte/" target="blank">
                                    {/*"Icon made by Pixel perfect from www.flaticon.com"*/}
                                    <img src="data:image/svg+xml;base64,
PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJCb2xkIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyNCAyNCIgaGVpZ2h0PSI1MTIiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjUxMiIgY2xhc3M9IiI+PGc+PHBhdGggZD0ibTIzLjk5NCAyNHYtLjAwMWguMDA2di04LjgwMmMwLTQuMzA2LS45MjctNy42MjMtNS45NjEtNy42MjMtMi40MiAwLTQuMDQ0IDEuMzI4LTQuNzA3IDIuNTg3aC0uMDd2LTIuMTg1aC00Ljc3M3YxNi4wMjNoNC45N3YtNy45MzRjMC0yLjA4OS4zOTYtNC4xMDkgMi45ODMtNC4xMDkgMi41NDkgMCAyLjU4NyAyLjM4NCAyLjU4NyA0LjI0M3Y3LjgwMXoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6I0ZGRkZGRiIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD48cGF0aCBkPSJtLjM5NiA3Ljk3N2g0Ljk3NnYxNi4wMjNoLTQuOTc2eiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBzdHlsZT0iZmlsbDojRkZGRkZGIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCI+PC9wYXRoPjxwYXRoIGQ9Im0yLjg4MiAwYy0xLjU5MSAwLTIuODgyIDEuMjkxLTIuODgyIDIuODgyczEuMjkxIDIuOTA5IDIuODgyIDIuOTA5IDIuODgyLTEuMzE4IDIuODgyLTIuOTA5Yy0uMDAxLTEuNTkxLTEuMjkyLTIuODgyLTIuODgyLTIuODgyeiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBzdHlsZT0iZmlsbDojRkZGRkZGIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCI+PC9wYXRoPjwvZz4gPC9zdmc+" alt="Contact me via LinkedIn" />
                                </a>
                            </div>
                        </article>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;