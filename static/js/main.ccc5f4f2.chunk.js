(this.webpackJsonpresume=this.webpackJsonpresume||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),i=n(1),r=n(7),s=n.n(r),c=(n(13),n(14),n(15),n(16),function(){return Object(a.jsxs)("header",{className:"flex-row justify-content-center header-top",children:[Object(a.jsx)("div",{children:Object(a.jsx)("a",{href:"/#summary",children:"Summary"})}),Object(a.jsx)("div",{children:Object(a.jsx)("a",{href:"/#employment",children:"Employment"})}),Object(a.jsx)("div",{children:Object(a.jsx)("a",{href:"/#education",children:"Education"})}),Object(a.jsx)("div",{children:Object(a.jsx)("a",{href:"/#projects",children:"Projects"})}),Object(a.jsx)("div",{children:Object(a.jsx)("a",{href:"/#awards",children:"Awards"})})]})}),o=n(2),d=function(e,t){e.isDragging=!0,e.mouseX=t.clientX,e.mouseY=t.clientY},l=function(e,t,n){e.isDragging&&(!function(e,t,n){var a=new o.d(n/(8*Math.PI),t/(8*Math.PI)),i=(new o.h).setFromEuler(a);e.quaternion.multiplyQuaternions(i,e.quaternion)}(n,t.clientX-e.mouseX,t.clientY-e.mouseY),e.mouseX=t.clientX,e.mouseY=t.clientY)},u=function(e){e.isDragging=!1},m=n.p+"static/media/angular.1fd4bbed.svg",j=n.p+"static/media/java.f5dd86c3.png",A=n.p+"static/media/js.3abb3de3.png",h=n.p+"static/media/node.79912908.png",g=n.p+"static/media/react.d278d9a4.png",p=n.p+"static/media/sass.3bd84b23.svg",b=function(e,t){e.setSize(t.clientHeight,t.clientHeight)},f=function(){var e=[j,m,p,h,g,A].map((function(e){var t=(new o.j).load(e);return new o.f({map:t,transparent:!0})})),t=new o.b(3.5,3.5,3.5);return new o.e(t,e)},x=function(e,t,n,a,i){return function(){!function(e,t){var n=Math.sin(3*t.getElapsedTime());e.translateY(n/150)}(i,a),e.render(t,n)}};function k(e){var t=function(e){var t=new o.k({alpha:!0});return b(t,e),window.addEventListener("resize",(function(){return b(t,e)})),e.appendChild(t.domElement),t}(e),n=function(){var e=new o.g(75,1,.1,1e3);return e.position.z=5,e}(),a=new o.i,i=new o.c(!0),r=function(){var e=new o.a(16777215,2);return e.position.set(1,1,1),e}();a.add(r);var s=f();!function(e,t,n){var a=new o.d(t,n),i=(new o.h).setFromEuler(a);e.quaternion.multiplyQuaternions(i,e.quaternion)}(s,Math.PI/8,Math.PI/4),a.add(s),function(e,t){var n={isDragging:!1,mouseX:null,mouseY:null};e.addEventListener("mousedown",(function(e){return d(n,e)})),e.addEventListener("mousemove",(function(e){return l(n,e,t)})),e.addEventListener("mouseup",(function(){return u(n)})),e.addEventListener("mouseleave",(function(){return u(n)}))}(t.domElement,s),function(e){!function t(){e(),requestAnimationFrame(t)}()}(x(t,a,n,i,s))}n(18);var O=function(){var e=Object(i.useRef)(null);return Object(i.useEffect)((function(){k(e.current)}),[]),Object(a.jsx)("div",{className:"flex-row justify-content-center flex-1 three-container",ref:e})},v=n.p+"static/media/github.d1bb13ce.svg",y=(n(19),function(){return Object(a.jsx)("div",{id:"summary",className:"flex-row justify-content-center summary-container",children:Object(a.jsxs)("div",{className:"flex-col summary-flex-column",children:[Object(a.jsxs)("div",{className:"title-container",children:[Object(a.jsx)("h1",{children:"D'Arcy Myronuk"}),Object(a.jsxs)("div",{className:"flex-row justify-content-center align-items-center contact-container",children:[Object(a.jsxs)("a",{href:"mailto:darcy.myronuk@gmail.com",children:[Object(a.jsx)("img",{alt:"Email",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAAEZxJREFUeJztnXu03FV1xz/35h0ICTQhgQQNVV4isbwaibwjCChYC1FEtFJrFxahhRaRQmGKgOKLokVYoqL4AkJVFBAaxIAgD3lUUMAAAQJ5IIQEgoEbkkz/2HeWl2FmMuec/XvMzPez1lkLFvz23r87Z8/sc84+e4MQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEIP0FaR3JDAV2HJwbAqMAUYDo4D+guwSxbIeGABeGRzLgaWD42lgTd4G5eEgfcDOwP7ALsDbgG2B4TnoFt3DWmAB8ABwN/AL4P+AapZKs3KQPmBf4O+Ag4HNM9IjepvngJ8B3wXmk7GzeDAaOAlYiBmroZHXeAI4AQvVS0c/cCywmOL/UBq9PZZhc7Go9fXr2Aa4leL/MBoaQ8dtwA4UzBHAnyj+j6Gh0WisAg4ngWEJz54MfB3bshWijIwE5gCvAr+KERDrIKcA51GiOE+IJvQBs7EzlFtDH45xkGOAr0Y8J0SRzAaWAPeGPBT6C7AzcAcKq0RnMgDsiR00tkWIg4wB7qEEOwNCJPA4sCPwcjv/c0i6x7+TnXOsBv4IvITFitWM9Ihy04dFJxtj2RdjM9CxNXAacHq7BrXDlsAj+Bi8BsujuQm4E3gQS0oTop5JwPbATGwNsT8+4f0A8BYs48OFi0jfk34MOA4Y72WU6DnGA8djYVLqfLzYy6gJpB0Gvgz8GzDCyyDR84zE5tRq0ublZA9jTkgw4nFgJw8jhGjAjlhkEjs/T/Uw4p5I5QuwtYsQWTIFeJi4OfrbVOXTIhWvAN6cqlyINtka2+iJmatvSVH8iUilR6coFSKCw4mbqyemKJ0boTA430UIJ64nfL7+JEXhExEK35WiUIgE3k74fH2eyKTbiRHKHolVJoQTMZtKb2gmrFV5nRkRxv3PoEIhiuKHEc80Xai3cpDpEYp+HvGMEJ5cE/FM0xzDVg7yxkAla4HfBD4jhDcPE57bt1Wz/9Aqm7fpQ014HDv6F6Io+rDT8QmBzzVNOWnlIJsGKlmOGag1iCiCzbACcodEPBuVkzWP8N2Anw4aKkSe/DVxRxK1EbU0uCNS2ZPAHjEKhYjgk9j9jljnqBJwBXco9yUofBUrC6QzEZEVGwOXk+YYSQ5Sq5ydMq4B/iJGuRAteCvxGbylcpAqsAiYFWOAEA34CP7VPAt1kFrIdQoKuUQ8o4FL8HWM0jhIbVyLQi4Rzpuwgm9ZOEepHKQKPAW8I8Yg0ZO8D1hJds5ROgepYiHXp1HIJZozHPgS2TpGaR2kNq7D0uqFGMpU8u05U1oHqWIh154xBoqu5J1Ylc28nKP0DlLFQq5TUcjVy/QDZwLryNc5OsJBauPnKOTqRSYCN5D/fOs4B6liDeP3ijFYdCR7YGG21/x5AivE4OIgrS5MhbLeSc5U4JdYNXmFXN3NicDNWP01D64FdsG+3DMn9BfkC8Blgc9saFyPVfgW3cUm/Ll+gcdYy2uPDSqBz+cSYlUGnzsG31yZxcDeMS8gSsnbsOo3XvNjKbBPnY5KoIxcQqwalwK7A793krcl1kvkdBRydTofw+4ZeZWl/SXwV1iYlglZOAhYU5zdgW86yRsGfAaFXJ3KGOyL8xtY0mEqVeAc4ADgGQd5UcSGWPV8CGvo7hly1f+kivKyLXA/fp//c8DBG9BZCZSZa4hVz/eBXfHbWdgSa+H2H+Rjv4hnDjb5vHrE3IntUuVWfy2vCbYAq5t6kZO8YcBZWMi1uZNM4ccI4CvAlcA4J5lfwTZrFjnJS8YrxKpnDr7py0uAfeNfUzjzBuILfjQaL2JzJoRKoI5CQ6x65mI/k1F7zw3YArgROAOFXEVzEHaxaaaTvPux8Hyuk7xgippQC7FLUxc4yRsG/Cfwvzg1ZhRB9ANnY9cXvG6MXoqF5Y84yXMnqxCrnvdiPRq8fpKXAvtF2iLC2Rz7Bff6/FZjh80pVAJ1lirEqudq7LDndid5U7APrEI53q+b2QurnzbbSV5tM+dSJ3nJlGUCLcJ2KL6AeXQqtbsF81DIlQV9wKewDAevTsZzgd2wdUdHkFeIVc8hwLOBujcUcu3vZJuwyulX4/f5DADHO9tYCbSh1CFWPddhIdevnORNwX5JKpTzfTuJXbBdqsOc5NUih686yXOnrBNmMbbQPgefeyZDQ64pDvJ6kWOBX2M9yT24DtgZOx3vSIoKsep5J7As0JZWYxl+i8peYCPge/j9/deS/WW4SqBNHRVi1XMjFnLd5CRvMnZechad8f5FsgNwF5Zw6sEy7AvvXHw2YzKnUybIMiy1+Uys6kUq/Viy4y+wk3jxej6INZZp2gE2kJuxkGq+k7xc6BQHAVuLnIWFR0ucZO6LhZIHOMnrBkYBXwN+gIVXqVSBz2Kf2zIHeaWhLGuQRkzCUp694uJ12IWsYTm+QxmZjsXjXn/X5cC783yBQSqBdnb0GqQRz2LnJZ/GFn2p9GNXens55DoU28Ld1UneXdi28LVO8gqhUx0EzPPPw24XPuUkcx96L+QaBnwOO/wL7WzcjP/G0lCedJJXSsocYtWzGdZh1zPkOpvuD7m2wBbPXn+3F4H35/oGjanQ4yFWPc9jp7snYXV+U+kHTsM316hs7IclGnqVVHoAy6W60kleKegWB6lxPnbP5HEneXtjv6QHOskrA8OxDAXPRM5vY5ekFjjJKw3d5iBge/c7Y5X7PJiE3X0/l84PuYaWdfV4l5exWlfHDP5zT9FJa5BmHAe8gl+MfRcWRnQi3n03FgAzcn2D9qmgNUhbXIhVD3/USd7uwG3AvzjJy4N+bMLcgF/RvavosLsbWdANvyA1xgE/xO/bs4rtmpW9Y+8kLO/M653XAP+c6xvEUUG/IEGswnKL/hG/WPlQ7EukrL1M9sT3TGcJtmnhVWijI+gVB6lxCbbb8rCTvGnYordMVR77gJMxuzy3qDehB4uHl+VDzZPafv1lTvJqVR7nUXyayqZYd6XPY9u5nmyM5b95paJ0BL3oIGD9S552lrk/8FuseFoR7IbvddhGjMfWNF61dktPrzrIl7GzAG8mYVdJP4/Vp82L47Ddtek56NoM+7XcLgddhdNrDtKH3XU4MWMdJ2NFJ6ZnqAdsd+5yLDlwZMa6hjIZy3z+yxx1FkIvOUg/1tDnEznpm4ntIh2RkfydsO3JD2Qkf0NMxZzEqwFnKekVBxkOfJf0kpahjMcKol2ET2elGh/FqoFs6ygzhulYQmfXVorpBQcZAVwBHFWgDcdiE3r7RDljgG9hpTnHpBo1yOXYzb9YtsEKa0z0Madz6IaT9FHANfieoKeMPxH/K+bdymxokehdgBWJ8u7Fqi6WgQpOJ+mt6HQHGYvttqROpIVYx15PR/kedq7QLu/HLiN56W+UaPh20ntJ3h74XllRQQ7SknH43JT7A7YIHYuFNp5OsgD75m7FSGyHylPvVdipeCP2Jr3H/Xz8wr9YKshBmjIe+yZLnUi/4/WLz6Px7dg7AJzQ5D2mY+n1XrrW0N729gGkXxG4AQtvi6LSwCY5CJZdew/pk+lemi86t8NOzL0mbhVLD9lsiI5D8W0q9DQwq70/IQDvwRwqRefV+Ke7tEulDft6zkEmY3lWqZPpDja82BwNXOyga+hYhBWyOw8rkucldx5x90AOx0oqpei+gmJuYVYC7ex6B5mKZeimTqZbCGtb/AHgBQe9WYx1WN/GlK38owblpNjxbfLPAq4E2tjVDvJG4LE27NvQuBFbjIfyJnyrEXqM54B3RbxLI44h/RftIidb2qUSaF/XOsibseJkqRPqWtJOukdije6LdowqFiJulfAujfgnB7vOd7apFZVA27rSQXbAGu2kfnA/wi/R732kH7iljAvILov4JAf7zsnItnoqgXZ1nYPMwKdCxw/w32mZjn2L5+kYLwJznN+jEac52HpaDnZWAm3qKgfZDcsdSv2gvkV2uWgjgC/iuxvVbDxAvkmLZzvYnOV1A+hhB5kFrAy0q9H4GvnsrLwHWzBn5RzfIW5jIZUvRdo7dByboX2VQFu6wkH2wecU+8sZ21nPNOzylKdjvAJ8PM+XaMCFpL3DeuAjGdlWCbSl4x3kQCz7NHVi5bVIrGc4VrrUI+R6DCutWjR92AW0lHdZSzbV4CuBdnS0gxyGT/nQ0zOyL4QDgWeIf4efUJ6UcrA13PdJ+1zW4F9oohJoQ8c6yBGk5wRVgX/NwLZYtsBu4YXY/yp2z72MDMcKhad8Pq/gW0G/Eqi/Ix3kaNJzgdZjFT/KRq1ebjtpHEsob/XGGiNIv5i2GltnelAJ1N1xDvIPpOcArQP+3tGmLNgPc4Bm7+DZwyNrRpF+QW0VdnErlUqg3o5ykE+SvphdC3zIyZ6sGY81I70Za/zzEFZo++AijYpkLOkX1VaQvglRCdTZMQ5ycqDORmMNlqotimEc6RfWngV2TLChEqivI6q7n4FVJExhAPhb/LpLiXBWYb9+9yXImIhlV2/jYlECZXGQc7G7Cymsxm7iXZNujkhkJXZ193cJMqZgu33TPQyKpQwOcj5waqKMl7BvrXnp5ggnlgOzscIXsUzDnGSqi0URFOkgfdhFmtR2Zi9g31a3JFskvPkj5iQLE2RsjZU4LWQ3rygH6ceyaVMT1pZjbQfuSLZIZMVi7DNalCBjOyw6yL3lXREOMhxLT/hoopxnsHOEe1MNEpnzJPZLsiRBxk5YOaHxLha1Sd4OMhK4EjgyUc5i7NT1gWSLRF48irWifjZBxq5Yl6vcqjfm6SCjgR9j11JTeBKrAJiy+BPF8BDmJM8nyNgD6zCcS/XGVg6y3lHPWGz79ZBEOY9izpGy6BPFcj9WceWFBBn70bqWQOhluHXN/kMrB1kbqKRZqclxWOw4O1BePQ9hzpGy2BPl4G7sy/KlBBkHYYXpGtUUCC172nSut3KQ1YFKGhVcm4DtPuwZKKue+7E1x9JEOaI8/Bo72E3pW/83WGOk+nkcupBvOtdbOUjoT+Dmdf8+ETvkmRkop567sZ/UlMWdKCfzsTXpQIKMI4Fv8NqwKrSZz4sxikOvUw49i5iMpRmkJh7eRvNS/aJ7OIz0i3EXDpEXWhX/4hijPxOoZOXgc9OwHaZU57gJ2CjGcNGRzCH9gtwXB2WF1ks+M8bgj0UYWEsrSHWO6ym+CYvInw/jUyw79Jmotnh7RSjyuD9+Nfn2/Bbl4uPkU3Bv6HhHjKHjCzD0CrKrLSs6h+PJd95Fp694rCXaHd+hmGYropx43C5tZzyaYuQlORn5dfJvsiLKzxnk88UczZwcDLwAOYdozmfJdv59OMW4TfCpathsfC7FONEz/BfZzL+1xPVvfA2pVfOajUqqYaKn8G6aWsXpivZBGRh2iodhoqfoI+6Mo9U4ysuwB50MWg+c4GGU6EmGAZfjMxeX4nje9kEno+Z6GiV6kj3waaL0qXaUtbt71Af8BrvymMoL2P2QW7D75Auw4gtC1DMBa7M9A3OMA/Cpk/U0Vghig1c6QrZXd8dKSmZxmLcac5KXsFL/1Qx0iPLTh2VSbIRVMMkqWfVILGvDndAMXw2Nso0fEUDoAd0wfK7PClEEC7EuySvafSDmBHsCFmptH/GsEEXxPJah/mDIQzFlf1YC7yatCJgQebIKa8kd5BwQXxdrIVZO8qnI54XIi+VY/8PbYx5OKRz3B2zrLao7jxA58HtsjkbXbk7dsl0FXIZtx81EWbmiHFSx3K05WA3nUjAT89Sit/E0envcCcyixBwK3ErxfyiN3hq3YAtxV7IMiWZgl1EOx5qgCOHNY8BVWDuNTCr957Vm2B4rHToLa/G7HUpaFGEMYPWZ78N2pOYDj2SttKhFdT+wFVZkbgqwKXZ7cRSWi1OG3okif9ZjuXgDWDnQFVha+lNYTxjPjgNCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQoTx/xno5SKKJSAkAAAAAElFTkSuQmCC"}),Object(a.jsx)("div",{children:"darcy.myronuk@gmail.com"})]}),Object(a.jsxs)("a",{href:"https://github.com/dmyronuk",children:[Object(a.jsx)("img",{alt:"Github",src:v}),Object(a.jsx)("div",{children:"dmyronuk"})]})]})]}),Object(a.jsxs)("section",{className:"summary-body",children:[Object(a.jsx)("h2",{children:"Summary"}),Object(a.jsx)("div",{children:"Intermediate front-end web developer with experience in e-commerce and data-driven enterprise\n    application development. Motivated by curiosity and the desire to take on new challenges. Focused on\n    creating seamless user experiences and delivering clean, performant code."})]}),Object(a.jsx)("section",{className:"flex-row flex-1",children:Object(a.jsx)(O,{})}),Object(a.jsx)("div",{className:"link-arrow-container inverted flex-end",children:Object(a.jsx)("a",{href:"/#employment",children:Object(a.jsx)("img",{alt:"Awards Link",src:"data:image/png;base64,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"})})})]})})}),J=n(3),w=[{name:"Kiro",description:"Real estate app that leverages Yelp and Google APIs to provide users\n      with information about nearby amenities and connects users through a real-time chat\n      feature.",githubURL:"https://github.com/dmyronuk/kiro",imageURL:"https://raw.githubusercontent.com/dmyronuk/kiro/master/screenshots/kiro_demo.gif",tech:"NodeJS | React | Websockets | Postgres | Sass | Google Maps API | Yelp API"},{name:"FoodBar",description:"Food ordering service that automates SMS communication between client and\n    vendor. Twilio API is used to notify the business when an order has been placed and a\n    confirmation message is auto-generated once the business specifies a prep time.",githubURL:"https://github.com/dmyronuk/foodbar",imageURL:"https://raw.githubusercontent.com/dmyronuk/foodbar/master/docs/demo.gif",tech:"NodeJS | Express | EJS | jQuery | Postgres | Twilio"},{name:"Chatty",description:"Real-time chat app allowing users to exchange text and picture messages.",githubURL:"https://github.com/dmyronuk/chatty",imageURL:"https://raw.githubusercontent.com/dmyronuk/chatty/master/screenshots/demo.gif",tech:"NodeJS | Express | ReactJS | Websockets"},{name:"Battleship",description:"Single-page implementation of the classic board game. Users can compete\n    against a computer opponent for naval dominance.",githubURL:"https://github.com/dmyronuk/battleship",imageURL:"https://raw.githubusercontent.com/dmyronuk/battleship/master/screenshots/demo.gif",tech:"NodeJS | Express | jQuery"},{name:"BarChart",description:"Simple script for rendering HTML bar charts. Supports both stacked and unstacked\n    bars as well as additional options for customizing bar colors, labels and legends.",githubURL:"https://github.com/dmyronuk/lhl-bar-chart",imageURL:"https://raw.githubusercontent.com/dmyronuk/lhl-bar-chart/master/screenshots/power_sales_graphs.png",tech:"Javascript | jQuery"},{name:"KeysWorkshop",description:"Repository of sheet music and lessons to help students learn piano. Randomized\n    theory exercises supplement the lessons and include tests on note and interval identification.\n    Also includes a dictionary of common scales/modes and visually maps them to a virtual keyboard.   ",githubURL:null,imageURL:n.p+"static/media/learnpiano_demo.dd49249f.gif",tech:"Python | Django | jQuery"}],B=n.p+"static/media/grey_link_arrow.0eadf903.png",R=(n(20),function(){var e=Object(i.useState)(null),t=Object(J.a)(e,2),n=t[0],r=t[1];return Object(a.jsxs)("div",{className:"flex-row justify-content-center projects-container",children:[n&&Object(a.jsxs)("div",{className:"flex-row justify-content-center align-items-center project-popup",children:[Object(a.jsx)("div",{className:"page-mask",onClick:function(){return r(null)}}),Object(a.jsx)("div",{className:"project-popup-content",children:Object(a.jsx)("img",{alt:n.name,src:n.imageURL})})]}),Object(a.jsxs)("div",{className:"content-mid-container",children:[Object(a.jsx)("div",{id:"projects"}),Object(a.jsxs)("section",{children:[Object(a.jsx)("h2",{children:"Projects"}),Object(a.jsx)("div",{className:"projects-grid",children:w.map((function(e,t){return Object(a.jsxs)("div",{className:"projects-item",onClick:function(){return r(e)},children:[Object(a.jsx)("a",{className:"project-github-link",href:e.githubURL,onClick:function(e){return e.stopPropagation()},children:Object(a.jsxs)("h3",{children:[e.name,e.githubURL&&Object(a.jsx)("img",{alt:"Github",src:v})]})}),Object(a.jsx)("div",{className:"tech default-light-grey",children:e.tech}),Object(a.jsx)("section",{children:e.description})]},"project_"+t)}))})]}),Object(a.jsx)("div",{className:"link-arrow-container",children:Object(a.jsx)("a",{href:"/#awards",children:Object(a.jsx)("img",{alt:"Awards Link",src:B})})})]})]})}),E=[{startDate:"Mar 2019",endDate:"Current",employerName:"Insured Connect",employerURL:"https://www.ins-connect.com/",role:"Front End Developer",duties:["Developed features for a web app providing life insurance data and insights to distributors and agents","Integrated REST APIs for aggregating and querying insurance policy data with Angular\n        components, leveraging ngx-datatable and ng2-charts/chart.js for visualizations","Built out front-end of custom CMS for in-app insurance carrier promotional content","Enhanced websocket-based chat/notifications codebase using NgRx/flux to centralize app state","Tech Stack: Angular 7-9, Typescript, Elasticsearch, MariaDB, MongoDB, Sass","Libraries: RxJS, NgRx, ngx-datatable, ng-bootstrap, ng2-charts","Tools: Kibana, AWS, Kubernetes, YouTrack, Bitbucket"]},{startDate:"Sept 2018",endDate:"Feb 2019",employerName:"Perficient",employerURL:"https://www.perficient.com/",role:"Intern Consulting",duties:["Front end web developer on agile team building enterprise ecommerce website","Contributed to both the project's support stream, maintaining the existing codebase and the development stream, adding enhancements/features","Tech Stack: WebSphere Commerce V8, Java, IBM DB2, Javascript, jQuery, Sass","Tools: Rational Application Developer, Jira, Bitbucket"]},{startDate:"Sept 2013",endDate:"June 2018",employerName:"Montcrest School",employerURL:"https://www.montcrest.on.ca/",role:"Piano Instructor",duties:["Taught music lessons to students aged 5-13 focusing on pop and jazz","Created lesson plans covering topics including performance, theory and ear training","Coached students at annual recitals"]},{startDate:"Feb 2012",endDate:"Aug 2019",employerName:"Soular Productions",employerURL:"http://www.soular.ca/",role:"Keyboardist",duties:["Performed on piano, organ and synthesizer with 9-piece R&B band","Transcribed recordings and created arrangements using Sibelius notation software","Clients included the Toronto Blue Jays (Jays Care Foundation Curve Ball), PricewaterhouseCoopers, The Children's Aid Foundation of Canada and the Women's Executive Network"]}],F=(n(21),function(){return Object(a.jsx)("div",{className:"employment-container",children:Object(a.jsxs)("div",{className:"content-mid-container",children:[Object(a.jsx)("div",{id:"employment"}),Object(a.jsxs)("section",{children:[Object(a.jsx)("h2",{children:"Employment"}),E.map((function(e,t){return Object(a.jsxs)("div",{className:"employment-education-item",children:[Object(a.jsxs)("header",{children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("a",{href:e.employerURL,children:Object(a.jsx)("h3",{children:e.employerName})}),Object(a.jsx)("div",{className:"employment-education-role",children:e.role})]}),Object(a.jsxs)("div",{className:"employment-education-date",children:[e.startDate," - ",e.endDate]})]}),Object(a.jsx)("div",{className:"bullets-container",children:Object(a.jsx)("ul",{children:e.duties.map((function(e,t){return Object(a.jsx)("li",{children:e},t)}))})})]},t)}))]})]})})}),P=[{name:"Oracle Certified Associate",url:"https://www.youracclaim.com/badges/ff1462f6-1e29-4ecc-8e2a-ca2beaa5b206",program:"Java SE 7 Programmer Certification OCA JP7",startDate:"Nov 2018",endDate:null,awards:null,logo:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT4AAACfCAMAAABX0UX9AAAAkFBMVEX////4AAD29vbn5+fd3d34FBT+6+v4Jyf6f3//9PT7c3P5JSX8pKT5RET/+/v+ycn+4+P5NTX7h4f+3d34HR3/8vL5YWH5Ly/5Pj79wcH/6ur8k5P+2dn5Ojr+0ND7enr6bW39w8P5TU39uLj8nJz6W1v9ubn4DQ37g4P8r6/5U1P8q6v8l5f6Zmb5GRn5UVFQAbRsAAAGRUlEQVR4nO2d6VLyShRFyf0EDEIChBAI8xgRwfd/u5vTCZihGym3Faxyrz9gN+nOWfSMYu2pRr7NU436AKgPgvogqA+C+iCoD4L6IKgPgvogqA+C+iCoD4L6IKgPgvogqA+C+iCoD4L6IKgPgvogqA+C+iCoD4L6IKgPgvogqA+C+iCoD4L6IKgPgvog7tTX+IP4P6fP+oMsfk7fy6NjeQDPP6ev+ehYHgD1QVAfBPVBUB8E9UFQHwT1QVAfBPVBUB8E9UFQHwT1QVAfBPVBUB8E9UFQHwT1QVAfBPVBUB8E9UFQHwT1QVAfBPVBUB8E9UFQH8Rj9J0/lq08u+CaGe1aZYYDTTGnzfFNkxzNhoWrnzvWQB51haQ0i7UuTnHipK2r4JNH6DsdGuWrndUi/f3KYKor3W/PiuUcJL1fTJ315+XCZ9aHPH4Y7ihqje3SRRNrNl613dPv0jc4lO80iXHeUS94cfX53YK/nUq1Cy1q4WkujR13nLiGjv6WeiunfM2qbi2W2/2w/av0zcpt40q4vKWv5gW5krpJqptLnGhE1FbRTX27ruYaP35trM/tHH6TvnrSOLrusZ1l7Kmw/dNFn7vN54eSvc+WdEirdbLd9z0JfbrJXrwdWbf0rZNfj/dW2WuO8k7OVv1ld/ib9G1UeOVx7CXpdOFF33MxRskO158JQwl6Lu2m27smfqhxYTWslys261NDbbevu/3Oa/+mvar1nSS+xk6X1VN9tp3qK80IQ7lycf0xUmPAWt3+MW+ifdYVb9Q3kWumI8MNR7eiqVzfSl5YanopYqQxM+irj2syGeaC3iaptcvi4iQ/GMYqk76matZfWDJSrb61dLajMTfOdCYGfdE+q28kbVGmYtUovXT2FZe+YW1n0teSApZf37qeavXJH+E4a2O29L2DQV/Py6aKy6QrH+XZViWe5XrTOsOkbyvKg6BXZGTqIzmq1SddbmX+6yOVfdbrk4nWvgyafalvnDyXJbitBnjVtk0rY4O+6GAKZ6IppET1+jbmcUYa5zwYJPp6reEnCzVju2nHDGQZ46fNoyVLnqk820myqdEY9NU3hmjGX0dj/TJ9cjNuM9XXnDv+FbUgcS5DlAp5exGgpiPpyEqfaQo16dt/Pxqran3S6aY9Y3Y7zh5H187bzpfvXJYtS/lp9SlG+qxsEmYyPJpmAdPYJ2On43ULhK2vgxGq1beUjmZeiMpK+JiZOibZ3fH0spIOxJKzqw9S0pHwnKx8XEPZJn3SIezvrlsq1jeSyOemXBn67EV25k3/XNbdu4fFtdGqjdn7MvQuJFvWZTK9mCZ2k76TvGfbcvp9VLxsVsuM0qyasJNAvPyuY63an5vdhL1JSvdsFQct+2wFahbRDw7GXYfU5tw8lbpBxfpmssxw3nXbqpY6FVgWNm1rtQ/zMuFJghMPTb3ioeEhPUaYa084lT7dvKLOvfziHvtOqj4yUPU53rI42rztk3ZmFfe8yQGXfR3K1W7NjTS3Hk/MPdWPw7ZGk9KnXdUo57ar3YjfFU6F+q7TqR9+fqFCGKaJrpzoFZfNalt7SXhTS77k4C+40pT9XrxktIZpSU6Y+8YGe6P01Rph4ascGv50Fo3T2gu5/h3fLlC5vmhrOGyO2athq6ivnhg/SDTJEcGr4V2JN2xv2pN+u2etdeeoNbW5aOp3HvdsOx7wWcdJG2H85r8nM0R506ZWJmpn0ZInuqk76bZx5xwdNJ5iEy/6StU6J+qH5Zz5jc+VHqnPqu8ODbuA714+KbKarm07+Qb2LC9xvA9LHhvaafLVj7O68iyYTAuFj8XEs1OsU8pMKx20Vn4+J7z9EdsD9an7fclTyGsWzosjec0siIL4QXOUfCkxSGeker7wSJeYyUnI59zT9vgxOQj1QVAfBPVBUB8E9UFQHwT1QVAfBPVBUB8E9UFQHwT1QVAfBPVBUB8E9UFQHwT1QVAfBPVBUB8E9UFQHwT1QVAfBPVBUB8E9UFQH8QP6uM/GoP0BVH9r2G9/pw+oof6IKgPgvogqA+C+iCoD4L6IKgPgvogqA+C+iCoD4L6IKgPgvogqA+C+iCoD4L6IKgPgvogqA+C+iCoD4L6IKgPgvogqA+C+iCoD4L6IGJ9/8i3ear9RwD+By9yury5LXVaAAAAAElFTkSuQmCC"},{name:"Lighthouse Labs",url:"https://www.lighthouselabs.ca/",program:"Web Development Bootcamp",startDate:"June 2018",endDate:"Aug 2018",awards:null,logo:"data:image/png;base64,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"},{name:"University Of Toronto",url:"https://music.utoronto.ca/",program:"Bachelor Of Music",startDate:"Sept 2003",endDate:"May 2007",awards:["Duke Ellington Scholarship","Monica Ryckman Scholarship","Graduate Award"],logo:"data:image/png;base64,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"}],q=(n(22),function(){return Object(a.jsx)("div",{className:"flex-row justify-content-center education-container",children:Object(a.jsxs)("div",{className:"content-mid-container",children:[Object(a.jsx)("div",{id:"education"}),Object(a.jsxs)("section",{children:[Object(a.jsx)("h2",{children:"Education"}),P.map((function(e,t){return Object(a.jsxs)("div",{className:"employment-education-item",children:[Object(a.jsxs)("header",{children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("a",{href:e.url,children:Object(a.jsx)("h3",{children:e.name})}),Object(a.jsx)("div",{className:"employment-education-role",children:e.program})]}),Object(a.jsx)("div",{className:"employment-education-date",children:e.endDate?e.startDate+"-"+e.endDate:e.startDate})]}),Object(a.jsx)("div",{className:"education-item-right",children:Object(a.jsx)("ul",{children:e.awards&&e.awards.map((function(e,t){return Object(a.jsx)("li",{children:e},t)}))})})]},t)}))]}),Object(a.jsx)("div",{className:"link-arrow-container",children:Object(a.jsx)("a",{href:"/#projects",children:Object(a.jsx)("img",{alt:"Awards Link",src:B})})})]})})}),C=[{name:"Eli Bennet Quartet",album:"Breakthrough",role:"Keyboardist/Composer",url:"https://www.allaboutjazz.com/breakthrough-eli-bennett-addo-records-review-by-dan-bilawsky.php",albumImg:n.p+"static/media/breakthrough.5c6bbf54.png",awards:[{date:"Jan 2016",awarder:"JAZZ.FM91",description:"Ranked #4 on JazzFM's list of top Canadian releases of 2015",url:"https://jazz.fm/top-canadian-releases-for-2015"},{date:"Sept 2015",awarder:"Western Canadian Music Awards",description:"Nominated Jazz Album Of The Year",url:"http://exclaim.ca/music/article/2015_western_canadian_music_award_winners_revealed"},{date:"July 2015",awarder:"Montreal Jazz Festival",description:"Nominated Grand Prix De Jazz"}]},{name:"Alex Goodman Quintet",album:"Bridges",role:"Keyboardist",url:"http://www.alexgoodmanmusic.com/",albumImg:n.p+"static/media/bridges.543c6b52.jpg",awards:[{date:"Apr 2013",awarder:"Juno Awards",description:"Nominated Contemporary Jazz Album Of The Year",url:"https://jazz.fm/2013-juno-nominations-are-in/"},{date:"July 2011",awarder:"Montreal Jazz Festival",description:"Nominated Grand Prix De Jazz"}]}],Q=(n(23),function(){return Object(a.jsx)("div",{className:"flex-row justify-content-center awards-container",children:Object(a.jsxs)("div",{className:"content-mid-container",children:[Object(a.jsx)("div",{id:"awards"}),Object(a.jsxs)("section",{children:[Object(a.jsx)("h2",{children:"Awards"}),C.map((function(e,t){return Object(a.jsxs)("div",{className:"flex-row awards-item",children:[Object(a.jsx)("a",{href:e.url,children:Object(a.jsx)("div",{className:"award-img-container",children:Object(a.jsx)("img",{alt:e.album,src:e.albumImg})})}),Object(a.jsxs)("div",{className:"award-content-container",children:[Object(a.jsxs)("header",{children:[Object(a.jsx)("h3",{children:e.name}),Object(a.jsx)("div",{children:e.role})]}),e.awards.map((function(e,t){return Object(a.jsx)("a",{href:e.url,children:Object(a.jsxs)("div",{className:"award-item faded-blue",children:[Object(a.jsxs)("div",{className:"flex-row",children:[Object(a.jsx)("div",{className:"awarder",children:e.awarder}),Object(a.jsx)("div",{className:"award-date",children:e.date})]}),Object(a.jsx)("div",{children:e.description})]})},"award-"+t)}))]})]},"group-"+t)}))]})]})})}),X=(n(24),function(){return Object(a.jsx)("footer",{className:"flex-row justify-content-center align-items-center"})}),z=function(){return Object(a.jsxs)("div",{className:"main-flex-container",children:[Object(a.jsx)(c,{}),Object(a.jsx)(y,{}),Object(a.jsx)(F,{}),Object(a.jsx)(q,{}),Object(a.jsx)(R,{}),Object(a.jsx)(Q,{}),Object(a.jsx)(X,{})]})};s.a.render(Object(a.jsx)(z,{}),document.getElementById("root"))}],[[25,1,2]]]);
//# sourceMappingURL=main.ccc5f4f2.chunk.js.map