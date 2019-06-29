const env =process.env.NODE_ENV || 'development'



  // Development Environment

  const development= {
    
    database: {
      host: '127.0.0.1',
      name:'chale_bus_dev',
      login: 'dev',
      password: 'dev'
    }
   
  }

  // Production Environment

  const production= {
    
    database: {
      host: '127.0.0.1',
      name:'chale_bus_production',
      login: 'prod',
      password: 'prod'
    }
  }
  const configuration = {
    development,
    production
}




module.exports = configuration[env]
