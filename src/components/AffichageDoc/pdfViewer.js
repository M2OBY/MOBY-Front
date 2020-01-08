
import React from 'react';
import { Container, Header, Grid, Form } from 'semantic-ui-react';
import { Document, Page } from 'react-pdf';
/************************** */
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
const recognition = new SpeechRecognition()
recognition.continous = true
recognition.interimResults = true
recognition.lang = 'fr-FR'

//*************************************** */


export class ExamplePDFViewer extends React.Component {
    constructor() {
        super()
  this.state = {
    file: null,
    numPages: 0,
    pageNumber: 1,
    listening: false
  }
  this.toggleListen = this.toggleListen.bind(this)
  this.handleListen = this.handleListen.bind(this)
}

  onFileChange = (event) => {
      this.toggleListen();
    this.setState({
      file: event.target.files[0]
    });
  }

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  }

  nextPage = () => {

    const currentPageNumber = this.state.pageNumber;
    let nextPageNumber;

    if (currentPageNumber + 1 > this.state.numPages) {
      nextPageNumber = 1;
    } else {
      nextPageNumber = currentPageNumber + 1;
    }

    this.setState({
      pageNumber: nextPageNumber
    });
  }

  //Precedent

  prevPage = () => {

    const currentPageNumber = this.state.pageNumber;
    let prevPageNumber;

    if (currentPageNumber - 1 < 1) {
      prevPageNumber = 1;
    } else {
      prevPageNumber = currentPageNumber - 1;
    }

    this.setState({
      pageNumber: prevPageNumber
    });
  }

  recherchePage = (numeroPages) => {

    const currentPageNumber = this.state.pageNumber;
    let prevPageNumber;

      prevPageNumber = numeroPages;

    this.setState({
      pageNumber: prevPageNumber
    });
  }

  //*********TEST************** */

  toggleListen() {
    this.setState({
      listening: !this.state.listening
    }, this.handleListen)
  }


  handleListen() { 



    console.log('listening?', this.state.listening)

    if (this.state.listening) {
      recognition.start()
      recognition.onend = () => {
        console.log("...continue listening...")
        recognition.start()
      }

    } else {
      recognition.stop()
      recognition.onend = () => {
        console.log("Stopped listening per click")
      }
    }

    recognition.onstart = () => {
      console.log("Listening!")
    }

    let finalTranscript = ''
    recognition.onresult = event => {
      let interimTranscript = ''

      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) finalTranscript += transcript + ' ';
        else interimTranscript += transcript;
      }
      
     // document.getElementById('interim').innerHTML = interimTranscript
      //document.getElementById('final').innerHTML = finalTranscript
     //*************Resultat******************* */
      if(interimTranscript ==='suivant'){
          console.log(finalTranscript);
        //document.getElementById('resultat').innerHTML = "Bravo"
        this.nextPage();
      }
      else if(interimTranscript === 'précédent'){
        console.log(finalTranscript);
        //document.getElementById('resultat').innerHTML = "Bravo"
        this.prevPage();   
      }
      else if(interimTranscript === '8'){
        let numeroPage = 8;
        console.log(finalTranscript);
        //document.getElementById('resultat').innerHTML = "Bravo"
        this.recherchePage(numeroPage);   
      }
      else if(interimTranscript === '5'){
        let numeroPage = 5;
        console.log(finalTranscript);
        //document.getElementById('resultat').innerHTML = "Bravo"
        this.recherchePage(numeroPage);   
      }
      else if(interimTranscript === '10'){
        let numeroPage = 10;
        console.log(finalTranscript);
        //document.getElementById('resultat').innerHTML = "Bravo"
        this.recherchePage(numeroPage);   
      }
      else if(interimTranscript === '2'){
        let numeroPage = 2;
        console.log(finalTranscript);
        //document.getElementById('resultat').innerHTML = "Bravo"
        this.recherchePage(numeroPage);   
      }
      else if(interimTranscript === '3'){
        let numeroPage = 3;
        console.log(finalTranscript);
        //document.getElementById('resultat').innerHTML = "Bravo"
        this.recherchePage(numeroPage);   
      }
      else if(interimTranscript === '7'){
        let numeroPage = 7;
        console.log(finalTranscript);
        //document.getElementById('resultat').innerHTML = "Bravo"
        this.recherchePage(numeroPage);   
      }
    //-------------------------COMMANDS------------------------------------

      const transcriptArr = finalTranscript.split(' ')
      const stopCmd = transcriptArr.slice(-3, -1)
      console.log('stopCmd', stopCmd)

      if (stopCmd[0] === 'stop'){
        recognition.stop()
        recognition.onend = () => {
          console.log('Stopped listening per command')
          const finalText = transcriptArr.slice(0, -3).join(' ')
          //document.getElementById('final').innerHTML = finalText          
          //document.getElementById('resultat').innerHTML = finalText 
        }
      }
    }
    
  //-----------------------------------------------------------------------
    
    recognition.onerror = event => {
      console.log("Error occurred in recognition: " + event.error)
    }

  }
//**************FIN************* */
  render() {
    const { pageNumber, numPages } = this.state;

    return (
        
      <Container>
        <br />
        <Header textAlign="center">PDF Preview</Header>
        <Form>
          <input type="file" onChange={this.onFileChange}>
          </input>
        </Form>

        <Grid centered columns={2}>
          <Grid.Column textAlign="center" onClick={this.nextPage}>

            <Document file={this.state.file} onLoadSuccess={this.onDocumentLoadSuccess} noData={<h4>Please select a file</h4>}>
              <Page pageNumber={pageNumber} />
            </Document>

            {this.state.file ? <p>Page {pageNumber} of {numPages}</p> : null}
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}
