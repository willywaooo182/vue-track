
//Control para el evento de tema oscuro / claro
document.getElementById("flexSwitchCheckChecked").addEventListener("change", () =>{
    if (document.getElementById("flexSwitchCheckChecked").checked){
        //alert("Activo :)");
        document.body.className = "lawrencium-dark";
        document.getElementById("nav").className="navbar navbar-expand-lg navbar-dark bg-dark"; 
        //removeClass("lawrencium-dark").addClass("lawrencium-light");
    } else {
        //alert("inActivo :(");
        document.body.className = "lawrencium-light";
        document.getElementById("nav").className="navbar navbar-expand-lg navbar-light bg-light";
        //document.body.removeClass("lawrencium-light").addClass("lawrencium-dark");
    }
});


//Codigo Vue para tracker de Cursos Platzi

new Vue ({
    el: '#app',

    data () {
        return {

            /*Inicia de esta manera para referenciar que no hay cursos
                { titulo: 'vacio', time: 0 }*/
            courses: [], //longitud cero elementos
            curso: '',  //variable para capturar ingreso del usuario
            horas: '',  //variable para capturar ingreso del usuario
            showCourses: false,
            timeTotal: 0, //actualizo total de horas para controlar color del mensaje

            //title: 'Title!'
            name: 'Bitcoin',
            symbol: 'BTC',
            img: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
            changePercent: -10,
            value: 0,
            color: 'f4f4f4',
            price: 8400,
            //prices: [8400,7900,8200,9000,9400,10000,10200],
            pricesWithDays: [
                { day: 'Lunes', value: 8400 },
                { day: 'Martes', value: 7900 },
                { day: 'Miercoles', value: 8200 },
                { day: 'Jueves', value: 9000 },
                { day: 'Viernes', value: 9400 },
                { day: 'Sabado', value: 10000 },
                { day: 'Domingo', value: 10200 }
            ],

            showPrices: false
        }
    }, 

    computed: {
        totalTime () {
            //Si existen cursos cargados vamos a sumar las horas
            if(this.courses.length){
                let timeCourses = 0; //almacena sumatoria de horas
                for (let i = 0; i < this.courses.length; i++) {
                    //sumo cada hora de cada curso usando parseInt() para que sume y no concatene
                    timeCourses += parseInt(this.courses[i].time);
                }
                this.showCourses=true; //como existen cursos hay que mostrarlos
                this.timeTotal = timeCourses; //actualizo total de horas
                return timeCourses; //retorna sumatoria de horas
            }
            //Sino hay cursos agregados, simplemte se envia cero
            return 0;
        }
    },

    methods: {
        addCourse () {
            //alert('vamos agregar el curso: ' + this.curso + ' con ' + this.horas + ' Horas');

            //Verifico que los campos esten llenos
            if(this.curso.length < 2){
                //por lo menos debe escriba un titulo de 3 caracteres. Ej.: Vue
                alert('Debe Ingresar un Titulo del Curso de Platzi de al menos tres (3) caracteres');
                this.cursoFocus;
                return;               
            }
            if(!this.horas.length){
                //por lo menos debe indicar cero (0) horas
                alert('Debe Ingresar las Horas invertidas en tu Curso de Platzi');
                return;
            }

            //Si los campos estan llenos, agrego el curso al listado
            if((this.curso.length > 2) && (this.horas.length)){
                /*estuctura del objeto { titulo: 'string', time: 0 }*/            
                this.courses.push({'titulo': this.curso, 'time': this.horas });

                //dejo vacios los inputs, para que agregue otro Curso
                this.curso = '';
                this.horas = '';
            }            
        }        
    },
    
})
