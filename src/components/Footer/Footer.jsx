import React, { Component } from "react";

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="footer__container">
                    <div className="footer__topcontent">
                        <article className="footer__contact">
                            <a href="mailto:KeonsinKryte@gmail.com">
                                <h3>Don't be afraid, <br />
                            Contact me! <span role="img" aria-label="Hiding laugh">🤭</span></h3>  {/*"Icon made by Pixel perfect from www.flaticon.com"*/} <br />
                                <div className="footer__contactinner">
                                    <img src="data:image/svg+xml;base64,
PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIj48Zz48Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0zODQsMTI4SDEyOGMtMTEuMTA0LDAtMjEuNjk2LDEuODU2LTMyLDQuNTQ0Vjk2aDExMmM4LjgzMiwwLDE2LTcuMTY4LDE2LTE2VjE2YzAtOC44MzItNy4xNjgtMTYtMTYtMTZIODAgICAgYy04LjgzMiwwLTE2LDcuMTY4LTE2LDE2djEyOS43OTJDMjUuOTIsMTY4LDAsMjA4LjgzMiwwLDI1NnYxNzZjMCw4LjgzMiw3LjE2OCwxNiwxNiwxNmgyNzJ2NDhjMCw4LjgzMiw3LjE2OCwxNiwxNiwxNmgzMiAgICBjOC44MzIsMCwxNi03LjE2OCwxNi0xNnYtNDhoMTQ0YzguODMyLDAsMTYtNy4xNjgsMTYtMTZWMjU2QzUxMiwxODUuMzEyLDQ1NC42ODgsMTI4LDM4NCwxMjh6IE0yMjQsNDE2SDMyVjI1NiAgICBjMC01Mi45MjgsNDMuMDcyLTk2LDk2LTk2YzUyLjkyOCwwLDk2LDQzLjA3Miw5Niw5NlY0MTZ6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBzdHlsZT0iZmlsbDojRkZGRkZGIj48L3BhdGg+Cgk8L2c+CjwvZz48L2c+IDwvc3ZnPg==" alt="Contact me via e-mail" /> <h3> | KeonsinKryte@gmail.com <span role="img" aria-label="Rocket">🚀</span></h3>
                                </div>
                            </a>
                        </article>
                        <article className="footer__media">
                            <div className="footer__mediainner">

                                <a href="https://www.linkedin.com/in/keonsinkryte/" target="blank">
                                    {/*"Icon made by Pixel perfect from www.flaticon.com"*/}
                                    <img src="data:image/svg+xml;base64,
PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJCb2xkIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyNCAyNCIgaGVpZ2h0PSI1MTIiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjUxMiIgY2xhc3M9IiI+PGc+PHBhdGggZD0ibTIzLjk5NCAyNHYtLjAwMWguMDA2di04LjgwMmMwLTQuMzA2LS45MjctNy42MjMtNS45NjEtNy42MjMtMi40MiAwLTQuMDQ0IDEuMzI4LTQuNzA3IDIuNTg3aC0uMDd2LTIuMTg1aC00Ljc3M3YxNi4wMjNoNC45N3YtNy45MzRjMC0yLjA4OS4zOTYtNC4xMDkgMi45ODMtNC4xMDkgMi41NDkgMCAyLjU4NyAyLjM4NCAyLjU4NyA0LjI0M3Y3LjgwMXoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6I0ZGRkZGRiIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD48cGF0aCBkPSJtLjM5NiA3Ljk3N2g0Ljk3NnYxNi4wMjNoLTQuOTc2eiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBzdHlsZT0iZmlsbDojRkZGRkZGIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCI+PC9wYXRoPjxwYXRoIGQ9Im0yLjg4MiAwYy0xLjU5MSAwLTIuODgyIDEuMjkxLTIuODgyIDIuODgyczEuMjkxIDIuOTA5IDIuODgyIDIuOTA5IDIuODgyLTEuMzE4IDIuODgyLTIuOTA5Yy0uMDAxLTEuNTkxLTEuMjkyLTIuODgyLTIuODgyLTIuODgyeiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBzdHlsZT0iZmlsbDojRkZGRkZGIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCI+PC9wYXRoPjwvZz4gPC9zdmc+" alt="Contact me via LinkedIn" />
                                </a>
                                <a href="https://www.behance.net/KeonsinKryte" target="blank">
                                    <img className="behance" src="data:image/svg+xml;base64,
PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJCb2xkIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyNCAyNCIgaGVpZ2h0PSI1MTIiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjUxMiIgY2xhc3M9IiI+PGc+PHBhdGggZD0ibTEyLjM2MyAxNC45NDdjMC0xLjg0OC0uODc5LTMuMjE0LTIuNjk1LTMuNzI2IDEuMzI1LS42MzEgMi4wMTYtMS41ODcgMi4wMTYtMy4wNzQgMC0yLjkzMi0yLjE5Mi0zLjY0Ny00LjcyMS0zLjY0N2gtNi45NjN2MTQuNzIxaDcuMTU4YzIuNjg0IDAgNS4yMDUtMS4yODMgNS4yMDUtNC4yNzR6bS05LjExNy03LjkzNGgzLjA0NmMxLjE3MSAwIDIuMjI1LjMyOCAyLjIyNSAxLjY4MiAwIDEuMjUtLjgyIDEuNzUzLTEuOTggMS43NTNoLTMuMjkxem0tLjAwMSA5LjcwOHYtNC4wNTRoMy41MzhjMS40MjkgMCAyLjMzMy41OTQgMi4zMzMgMi4xMDIgMCAxLjQ4Ny0xLjA3OSAxLjk1Mi0yLjQgMS45NTJ6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiNGRkZGRkYiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3BhdGg+PHBhdGggZD0ibTE4Ljc5NiAxOS41YzIuNTU0IDAgNC4yMDgtMS4xNDcgNS4wMDQtMy41ODVoLTIuNTkyYy0uMjc5LjkxLTEuNDI5IDEuMzkxLTIuMzIxIDEuMzkxLTEuNzIxIDAtMi42MjUtMS4wMDUtMi42MjUtMi43MTNoNy43MTNjLjI0NC0zLjQxOC0xLjY2LTYuMzMxLTUuMTgtNi4zMzEtMy4yNTkgMC01LjQ3MSAyLjQ0Mi01LjQ3MSA1LjY0MSAwIDMuMzIgMi4wOTYgNS41OTcgNS40NzIgNS41OTd6bS0uMDkyLTkuMDI2YzEuNDc1IDAgMi4yMTcuODY0IDIuMzQxIDIuMjc3aC00Ljc3OWMuMDk3LTEuNDAxIDEuMDMtMi4yNzcgMi40MzgtMi4yNzd6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiNGRkZGRkYiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3BhdGg+PHBhdGggZD0ibTE1LjY2NyA1LjI3M2g1Ljk4OHYxLjQ1aC01Ljk4OHoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6I0ZGRkZGRiIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD48L2c+IDwvc3ZnPg==" alt="Contact me via Behance" />
                                </a>
                            </div>
                        </article>
                    </div>
                    <div className="footer__bottomcontent">
                        <h4>©-KeonsinKryte 2020</h4>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;