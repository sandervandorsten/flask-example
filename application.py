from flask import Flask, render_template, url_for, request

app = Flask(__name__)


@app.route("/")
def hello():
	style   = url_for('static', filename ='style.css')
	p5      = url_for('static', filename='p5.min.js')
	sketch  = url_for('static', filename='sketch.js')
	particle  = url_for('static', filename='particle.js')
	return render_template('index.html',
                           style=style,
                           p5=p5,
                           sketch=sketch,
                           particle=particle)

if __name__ == "__main__":
    # Setting debug to True enables debug output. This line should be
    # removed before deploying a production app.
    app.debug = True
    app.run()