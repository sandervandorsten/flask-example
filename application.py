from flask import Flask, render_template, url_for, request

app = Flask(__name__)

# print a nice greeting.
def say_hello(username = "World"):
    return '<p>Hello %s!</p>\n' % username

def hoi():
	# some bits of text for the page.
	header_text = '''
        <html>\n<head> <title>EB Flask Test</title> </head>\n<body>'''
	instructions = '''
        <p><em>Hint</em>: This is a RESTful web service! Append a username
        to the URL (for example: <code>/Thelonious</code>) to say hello to
        someone specific.</p>\n'''
	home_link = '<p><a href="/">Back</a></p>\n'
	footer_text = '</body>\n</html>'

	# EB looks for an 'application' callable by default.

	# add a rule for the index page.
	application.add_url_rule('/', 'index', (lambda: header_text +
													say_hello() + instructions + footer_text))

	# add a rule when the page is accessed with a name appended to the site
	# URL.
	application.add_url_rule('/<username>', 'hello', (lambda username:
													  header_text + say_hello(username) + home_link + footer_text))


@app.route("/")
def hello():
	style   = url_for('static', filename ='style.css')
	p5      = url_for('static', filename='p5.min.js')
	sketch  = url_for('static', filename='sketch.js')
	return render_template('index.html',
                           style=style,
                           p5=p5,
                           sketch=sketch)

# @app.route("/run", methods=['POST'])
# def run():
# 	if request.method == 'POST':
# 		#print request.form['code'].split("\n")
# 		robotParser.parseText(request.form['code'].split("\n"))
# 		return "Oke!"


# run the app.
if __name__ == "__main__":
    # Setting debug to True enables debug output. This line should be
    # removed before deploying a production app.
    app.debug = True
    app.run()