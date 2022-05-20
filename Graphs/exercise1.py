# Exercise 1
# In this exercise,
#  we're going to implement an adjacency matrix and an adjacency list.
# To recap, an adjacency matrix is a matrix (list of lists) M where indexing into it with M[s][t] 
# will tell you whether the vertex s is adjacent to the vertex t.
# For this exercise, we're going to represent nodes with integers and edges of a graph as tuples. 
# (0, 1) represents an edge from node 0 to node 1. 
example_nodes = list(range(4)) # 0, 1, 2, 3
example_edges = [(0, 1), (1, 2), (0, 2), (1, 3), (3, 0)]

example_adjacency_matrix = [
    [0, 1, 1, 0],
    [0, 0, 1, 1],
    [0, 0, 0, 0],
    [1, 0, 0, 0]
]  
# We want to make a function that takes the list of nodes and list of edges and returns an adjacency matrix. I provided a test for you to double-check your implementation with. def create_adjacency_matrix(nodes, edges):
#     pass

def create_adjacency_matrix(nodes, edges):
    matrix = [[0 for _ in range(len(nodes))] for _ in range(len(nodes))]
    for s, t in edges:
        matrix[s][t] = 1
    return matrix

        
print (create_adjacency_matrix(example_nodes, example_edges)== example_adjacency_matrix)
#We also want to implement a function that creates an adjacency list, or a list of lists named L where indexing L[s] returns the list of all the nodes that you can get to from s. def create_adjacency_list(nodes, edges):
#     pass


def create_adjacency_list(nodes, edges):
    adj_list = [[] for _ in range(len(nodes))]
    for s, t in edges:
        adj_list[s].append(t)
    return adj_list

example_adjacency_list = [
    [1, 2],
    [2, 3],
    [],
    [0],
]
print(create_adjacency_list(example_nodes, example_edges) == example_adjacency_list)