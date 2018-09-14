 const host = 'aaa.bbb.ccc:8000';
 const socketAddress = 'ws://xx/cc/.json';//demo
 const ip = {
 	device: 'http://'+ host +'/api/equipment',
 	user: 'http://'+ host +'/api/user',
 }
 
 
 module.exports = {
 	host: host,
 	ip: ip,
 	socketAddress: socketAddress 	
 }


import config from '@/config.js';