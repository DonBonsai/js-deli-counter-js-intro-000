function takeANumber(queue, customer){
  queue.push(customer);
  return `Welcome, ${customer}. You are number ${queue.length} in line.`
}

function nowServing (queue){
  if (queue.length > 0){
    return "Currently serving " + queue.slice(0,1) + "."
  } else {
    return "There is nobody waiting to be served!"
  }
}
