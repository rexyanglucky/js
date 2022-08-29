class Node:
  def __init__(self, left=None,right=None, val=None):
    self.left = left
    self.right = right
    self.val = val

def getNumber(): 
  rootNode = Node()
  if rootNode.left is None:
    print "12"
  else:
    print "34"

getNumber()

  
