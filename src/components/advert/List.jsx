import React from "react";
import api from "../../utils/api";
import AdsList from "./AdsList"
import { Navbar, Button, Form, FormControl, Nav, Col, InputGroup  } from 'react-bootstrap';
import { Link } from "react-router-dom";
import '../../css/styles.css';
// import UserContext from '../../context/user';
// import {getUser} from '../../utils/storage'
import {connect} from 'react-redux';
// import { setReduxUser } from '../../store/actions'



const { getAds, findAds, getTags, getTagsAds, getAdsbySearch } = api();

export class Adverts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ads:[],
      tags:[],
      tagSelected:"",
      price:"",
      type:"",
      loading: true,
      

    };
    
  }
  
  // updateFilterFromStorage () {
  //   const user = getUser();
  //   if (user !== null) {
  //     this.context.updateUser(user);
  //   }
  //   return user;
  // }


  componentDidMount(){
  
  
    const user = this.props.user
    if(Object.keys(user).length === 0){
      // this.context.updateUser(user);
      this.props.history.push("/register");
    }

    this.myTags();
    this.myAds();
    
  }
  loadAds = this.props.loadAds;
  
  myTags = () => {
    getTags().then (tag => 
        this.setState({
            tags: tag,
            loading: false
          })
        );
}

resetAds = () => {
  this.props.history.push('/advert')
  getAds().then (ad =>
      this.setState({
        ads: ad
      })
    );
}


myAds = () => {

      const user = this.props.user
      if(Object.keys(user).length === 0){
        this.props.history.push("/register");
        return;
      }
        
        // if(this.props.user.tags === this.props.ads.tag)
        getTagsAds(user.tags).then(ad =>
          this.setState({
            ads: ad
          })
        );
       
  
  };

 


  mySearch = () => {
    console.log(this.state);
    const {name, price, tagSelected, venta} = this.state;
    getAdsbySearch(name, price, tagSelected, venta).then(ad =>
      this.setState({
        ads: ad
      })
    );
  }
  


  search = (event) => {
    const query = event.target.value;
    if (query !== ''){
      return findAds(query).then(ad => this.setState({
        ads: ad
      }))
    }
    this.myAds();
    
  }

  onSubmit = (event) => {
    event.preventDefault();
    
    this.mySearch();

    
  }

  onInputChange = (event) => {
    const {name, value} = event.target;
    console.log(name, value)
    this.setState({
        [name]: value
      }
    );
  };


  render() {
    console.log(this.props.ads)
    const { ads } = this.state;
    const { tags, loading } = this.state;


    if(loading){
        
        return null
    }

    return (
      <React.Fragment >
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
<Link to="/advert"><Navbar.Brand>
            <img
              src="https://es.seaicons.com/wp-content/uploads/2015/09/Online-Shopping-icon.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="WallaKeep"
            />{' '}
            WallaKeep
        </Navbar.Brand>
        </Link>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">

    </Nav>
    <Nav>
    <Form inline>
            <FormControl type="text" placeholder="Search" onKeyUp={this.search} className="mr-sm-2" />
            <Link to={`/editnew`}><Button variant="outline-info">New</Button></Link>
          </Form>
    </Nav>
  </Navbar.Collapse>
</Navbar>
<br/>


<Form  className="advancedSearch" onSubmit = {this.onSubmit} >
      <Form.Row>
        <Form.Group as={Col}  controlId="validationCustom01">
          <Form.Label>Name</Form.Label>
          <Form.Control
            onChange={this.onInputChange}
            type="text"
            placeholder="Name"
            name="name"
            defaultValue=""
            
          />
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom02">
          <Form.Label>Tags</Form.Label>
          <Form.Control as="select" name="tagSelected" required autoFocus={true}  onChange={this.onInputChange}>
                    <option className="field" value="" >Choose your Tag</option>
            {
                tags.map(element =>(
                    
                    <option key={element}>  {element}</option> 
                // <option value={element}>{element}</option> 
                
                ))
            }
             </Form.Control>
        </Form.Group>
        
      </Form.Row>
      <Form.Row>
      <Form.Group as={Col} md="6" controlId="validationCustom02">
          <Form.Label>Seller or Buyer</Form.Label>
          <Form.Control as="select" name="venta" size="" autoFocus={true}  onChange={this.onInputChange}>
                    <option className="field" value="" name="" >Choose an option</option>
                    <option className="field"  value="true" >sell</option>
                    <option className="field"  value="false" >buy</option>

          </Form.Control>
        </Form.Group>
        <Form.Group as={Col}  controlId="validationCustomUsername">
          <Form.Label>Max Price</Form.Label>
          <InputGroup>
            <Form.Control
              type="number"
              placeholder="€€€"
              min="1"
              name="price"
              aria-describedby="inputGroupPrepend"
              step="0.01"
              
              onChange={this.onInputChange}
            />
          </InputGroup>
          
        </Form.Group>
        
      </Form.Row>
      <Button className="buttonAdvancedSearc" variant="outline-info" type="submit">Submit form</Button>
      <br></br>
      <Button className="buttonReset" variant="outline-secondary" type="reset" onClick={this.resetAds}>Reset</Button>
    </Form>
       
        

        {
            ads 
            && 
            <AdsList ads={ads} />
        }
      </React.Fragment>
    );
  }
}

// function mapDispatchToProps(dispatch)  {
//   return{
//     loadAds: () => dispatch(fetchAds()),
    
//   }
// }

function mapStateToProps(state)  {
  return{
      user: state.user,
      ads: state.ads,
      isFetching: state.ui.isFetching,
      err: state.ui.err
  }

}

export default connect(mapStateToProps)(Adverts);

// Adverts.contextType = UserContext;