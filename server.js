/**
 * This file provided by Facebook is for non-commercial testing and evaluation
 * purposes only. Facebook reserves all rights not expressly granted.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 * ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

/**
http://www.json-generator.com/

[
  '{{repeat(10, 20)}}',
  {
    id: '{{index(13464613)}}',
    firstname: '{{firstName()}}',
    lastname: '{{surname()}}',
    birthday: '{{date(new Date(1990, 0, 1), new Date(2000, 0, 1), "YYYY-MM-ddThh:mm:ss Z")}}',
    gender: '{{random("Homme", "Femme")}}',
    classroom: '{{random("a", "b")}}',
    email: '{{email()}}'
  }
]
 */
var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var STUDENTS_FILE = path.join(__dirname, 'students.json');

app.set('port', (process.env.PORT || 3000));

app.use('/', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Additional middleware which will set headers that we need on each request.
app.use(function(req, res, next) {
    // Set permissive CORS header - this allows this server to be used only as
    // an API server in conjunction with something like webpack-dev-server.
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Disable caching so we'll always get the latest comments.
    res.setHeader('Cache-Control', 'no-cache');
    next();
});

app.get('/api/students/:classroom', function(req, res) {
  fs.readFile(STUDENTS_FILE, function(err, data) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    var filter = req.params.classroom;
    var students = JSON.parse(data);

    var response = students.filter(function(student){
      return student.classroom === filter;
    });

    res.json(response);
  });
});

app.post('/api/students', function(req, res) {
  fs.readFile(STUDENTS_FILE, function(err, data) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    var students = JSON.parse(data);
    // NOTE: In a real implementation, we would likely rely on a database or
    // some other approach (e.g. UUIDs) to ensure a globally unique id. We'll
    // treat Date.now() as unique-enough for our purposes.
    var newStudents = {
      id: Date.now(),
      //id: req.body.id,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      birthday: req.body.birthday,
      gender: req.body.gender,
      classroom: req.body.classroom,
      email: req.body.email
    };
    students.push(newStudents);

    fs.writeFile(STUDENTS_FILE, JSON.stringify(students, null, 4), function(err) {
      if (err) {
        console.error(err);
        process.exit(1);
      }

      var response = students.filter(function(student){
        return student.classroom === req.body.classroom;
      });
      res.json(response);
    });
  });
});

app.put('/api/students/:classroom/:id', function(req, res) {
  fs.readFile(STUDENTS_FILE, function(err, data) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    var id = parseInt(req.params.id,10);
    var classroom = req.params.classroom;
    var students = JSON.parse(data);

    var newStudents = {
      id: id,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      birthday: req.body.birthday,
      gender: req.body.gender,
      classroom: req.body.classroom,
      email: req.body.email
    };

    students.forEach(function(student, i){
      if (student.id === id) {
        students[i] = newStudents;
      }
    });

    fs.writeFile(STUDENTS_FILE, JSON.stringify(students, null, 4), function(err) {
      if (err) {
        console.error(err);
        process.exit(1);
      }

      var response = students.filter(function(student){
        return student.classroom === classroom;
      });

      res.json(response);
    });
  });
});

app.delete('/api/students/:classroom/:id', function(req, res) {
  fs.readFile(STUDENTS_FILE, function(err, data) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    var id = req.params.id;
    var classroom = req.params.classroom;
    var students = JSON.parse(data);

    var response = students.filter(function(student){
      return student.id !== parseInt(id,10);
    });

    fs.writeFile(STUDENTS_FILE, JSON.stringify(response, null, 4), function(err) {
      if (err) {
        console.error(err);
        process.exit(1);
      }

      response = response.filter(function(student){
        return student.classroom === classroom;
      });

      res.json(response);
    });
  });
});


app.listen(app.get('port'), function() {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});
