import Reflux from 'reflux';
import $ from 'jquery';
import ReservaActions from '../actions/ReservaAction';

var ReservaStore = Reflux.createStore({
    listenables: [ReservaActions],
    Reservalist: [],
    
    init: function() {
    	 this.fetchList();        
    },

    fetchList: function() {
      $.ajax({
		  crossDomain: true,
		  cache: false,
      context: this,
		  url: 'https://infinite-atoll-7499.herokuapp.com/api/v1/Reserva',
		  method: "GET", 
      success: function(data) {
          console.log('fetch complete');
          this.Reservalist = data.slice();
          this.trigger(this.Reservalist);     
        }
      });
    }
});

export default ReservaStore;