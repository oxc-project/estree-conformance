__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "sayHello",
        "optional": false,
        "typeAnnotation": null,
        "start": 67,
        "end": 75
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "somebody",
          "optional": false,
          "typeAnnotation": null,
          "start": 76,
          "end": 84
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": "Hello ",
                "raw": "'Hello '",
                "start": 99,
                "end": 107
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "somebody",
                "optional": false,
                "typeAnnotation": null,
                "start": 110,
                "end": 118
              },
              "start": 99,
              "end": 118
            },
            "start": 92,
            "end": 119
          }
        ],
        "start": 86,
        "end": 121
      },
      "expression": false,
      "start": 58,
      "end": 121
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 58,
  "end": 122
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 58,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "sayHello",
    "start": 67,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 75,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "somebody",
    "start": 76,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 86,
    "end": 87
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 92,
    "end": 98
  },
  {
    "type": "String",
    "value": "'Hello '",
    "start": 99,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 108,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "somebody",
    "start": 110,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 118,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 120,
    "end": 121
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "sayHello2",
        "optional": false,
        "typeAnnotation": null,
        "start": 64,
        "end": 73
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "somebody",
          "optional": false,
          "typeAnnotation": null,
          "start": 74,
          "end": 82
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": "Hello ",
                "raw": "'Hello '",
                "start": 97,
                "end": 105
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "somebody",
                "optional": false,
                "typeAnnotation": null,
                "start": 108,
                "end": 116
              },
              "start": 97,
              "end": 116
            },
            "start": 90,
            "end": 117
          }
        ],
        "start": 84,
        "end": 119
      },
      "expression": false,
      "start": 55,
      "end": 119
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 55,
  "end": 121
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 55,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "sayHello2",
    "start": 64,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 73,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "somebody",
    "start": 74,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 84,
    "end": 85
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 90,
    "end": 96
  },
  {
    "type": "String",
    "value": "'Hello '",
    "start": 97,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 106,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "somebody",
    "start": 108,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 118,
    "end": 119
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "sayHello3",
        "optional": false,
        "typeAnnotation": null,
        "start": 69,
        "end": 78
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "somebody",
          "optional": false,
          "typeAnnotation": null,
          "start": 79,
          "end": 87
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": "Hello ",
                "raw": "'Hello '",
                "start": 102,
                "end": 110
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "somebody",
                "optional": false,
                "typeAnnotation": null,
                "start": 113,
                "end": 121
              },
              "start": 102,
              "end": 121
            },
            "start": 95,
            "end": 122
          }
        ],
        "start": 89,
        "end": 124
      },
      "expression": false,
      "start": 60,
      "end": 124
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 60,
  "end": 126
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 60,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "sayHello3",
    "start": 69,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 78,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "somebody",
    "start": 79,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 89,
    "end": 90
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 95,
    "end": 101
  },
  {
    "type": "String",
    "value": "'Hello '",
    "start": 102,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 111,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "somebody",
    "start": 113,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 123,
    "end": 124
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "sayHello4",
        "optional": false,
        "typeAnnotation": null,
        "start": 68,
        "end": 77
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "somebody",
          "optional": false,
          "typeAnnotation": null,
          "start": 78,
          "end": 86
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": "Hello ",
                "raw": "'Hello '",
                "start": 101,
                "end": 109
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "somebody",
                "optional": false,
                "typeAnnotation": null,
                "start": 112,
                "end": 120
              },
              "start": 101,
              "end": 120
            },
            "start": 94,
            "end": 121
          }
        ],
        "start": 88,
        "end": 123
      },
      "expression": false,
      "start": 59,
      "end": 123
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 59,
  "end": 125
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 59,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "sayHello4",
    "start": 68,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 77,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "somebody",
    "start": 78,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 88,
    "end": 89
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 94,
    "end": 100
  },
  {
    "type": "String",
    "value": "'Hello '",
    "start": 101,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 110,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "somebody",
    "start": 112,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 120,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 122,
    "end": 123
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "sayHello5",
        "optional": false,
        "typeAnnotation": null,
        "start": 66,
        "end": 75
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "somebody",
          "optional": false,
          "typeAnnotation": null,
          "start": 76,
          "end": 84
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": "Hello ",
                "raw": "'Hello '",
                "start": 99,
                "end": 107
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "somebody",
                "optional": false,
                "typeAnnotation": null,
                "start": 110,
                "end": 118
              },
              "start": 99,
              "end": 118
            },
            "start": 92,
            "end": 119
          }
        ],
        "start": 86,
        "end": 121
      },
      "expression": false,
      "start": 57,
      "end": 121
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 57,
  "end": 123
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 57,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "sayHello5",
    "start": 66,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 75,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "somebody",
    "start": 76,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 86,
    "end": 87
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 92,
    "end": 98
  },
  {
    "type": "String",
    "value": "'Hello '",
    "start": 99,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 108,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "somebody",
    "start": 110,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 118,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 120,
    "end": 121
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "sayHello6",
        "optional": false,
        "typeAnnotation": null,
        "start": 66,
        "end": 75
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "somebody",
          "optional": false,
          "typeAnnotation": null,
          "start": 76,
          "end": 84
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": "Hello ",
                "raw": "'Hello '",
                "start": 99,
                "end": 107
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "somebody",
                "optional": false,
                "typeAnnotation": null,
                "start": 110,
                "end": 118
              },
              "start": 99,
              "end": 118
            },
            "start": 92,
            "end": 119
          }
        ],
        "start": 86,
        "end": 121
      },
      "expression": false,
      "start": 57,
      "end": 121
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 57,
  "end": 123
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 57,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "sayHello6",
    "start": 66,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 75,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "somebody",
    "start": 76,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 86,
    "end": 87
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 92,
    "end": 98
  },
  {
    "type": "String",
    "value": "'Hello '",
    "start": 99,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 108,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "somebody",
    "start": 110,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 118,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 120,
    "end": 121
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "sayHello7",
        "optional": false,
        "typeAnnotation": null,
        "start": 66,
        "end": 75
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "somebody",
          "optional": false,
          "typeAnnotation": null,
          "start": 76,
          "end": 84
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": "Hello ",
                "raw": "'Hello '",
                "start": 99,
                "end": 107
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "somebody",
                "optional": false,
                "typeAnnotation": null,
                "start": 110,
                "end": 118
              },
              "start": 99,
              "end": 118
            },
            "start": 92,
            "end": 119
          }
        ],
        "start": 86,
        "end": 121
      },
      "expression": false,
      "start": 57,
      "end": 121
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 57,
  "end": 122
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 57,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "sayHello7",
    "start": 66,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 75,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "somebody",
    "start": 76,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 86,
    "end": 87
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 92,
    "end": 98
  },
  {
    "type": "String",
    "value": "'Hello '",
    "start": 99,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 108,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "somebody",
    "start": 110,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 118,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 120,
    "end": 121
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 11
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 14,
        "end": 16
      },
      "expression": false,
      "start": 0,
      "end": 16
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "sayHello8",
        "optional": false,
        "typeAnnotation": null,
        "start": 62,
        "end": 71
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "somebody",
          "optional": false,
          "typeAnnotation": null,
          "start": 72,
          "end": 80
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 82,
        "end": 85
      },
      "expression": false,
      "start": 53,
      "end": 85
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 85
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 0,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 9,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 11,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 12,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 14,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 15,
    "end": 16
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 53,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "sayHello8",
    "start": 62,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 71,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "somebody",
    "start": 72,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 84,
    "end": 85
  }
]
```
