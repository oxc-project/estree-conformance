__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 5
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 8,
                "end": 14
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "for",
                "optional": false,
                "typeAnnotation": null,
                "start": 15,
                "end": 18
              },
              "optional": false,
              "computed": false,
              "start": 8,
              "end": 18
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "add",
                "raw": "\"add\"",
                "start": 19,
                "end": 24
              }
            ],
            "optional": false,
            "start": 8,
            "end": 25
          },
          "definite": false,
          "start": 4,
          "end": 25
        }
      ],
      "declare": false,
      "start": 0,
      "end": 26
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 34,
                "end": 37
              },
              "start": 32,
              "end": 37
            },
            "start": 31,
            "end": 37
          },
          "init": null,
          "definite": false,
          "start": 31,
          "end": 37
        }
      ],
      "declare": false,
      "start": 27,
      "end": 38
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": null,
          "start": 39,
          "end": 40
        },
        "operator": "+",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": null,
          "start": 43,
          "end": 44
        },
        "start": 39,
        "end": 44
      },
      "directive": null,
      "start": 39,
      "end": 45
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": null,
          "start": 46,
          "end": 47
        },
        "operator": "-",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": null,
          "start": 50,
          "end": 51
        },
        "start": 46,
        "end": 51
      },
      "directive": null,
      "start": 46,
      "end": 52
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": null,
          "start": 53,
          "end": 54
        },
        "operator": "+",
        "right": {
          "type": "Literal",
          "value": "",
          "raw": "\"\"",
          "start": 57,
          "end": 59
        },
        "start": 53,
        "end": 59
      },
      "directive": null,
      "start": 53,
      "end": 60
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": null,
          "start": 61,
          "end": 62
        },
        "operator": "+",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 65,
          "end": 66
        },
        "start": 61,
        "end": 66
      },
      "directive": null,
      "start": 61,
      "end": 67
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": null,
          "start": 68,
          "end": 69
        },
        "operator": "+",
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 72,
          "end": 73
        },
        "start": 68,
        "end": 73
      },
      "directive": null,
      "start": 68,
      "end": 74
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": "",
          "raw": "\"\"",
          "start": 75,
          "end": 77
        },
        "operator": "+",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": null,
          "start": 80,
          "end": 81
        },
        "start": 75,
        "end": 81
      },
      "directive": null,
      "start": 75,
      "end": 82
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 83,
          "end": 84
        },
        "operator": "+",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": null,
          "start": 87,
          "end": 88
        },
        "start": 83,
        "end": 88
      },
      "directive": null,
      "start": 83,
      "end": 89
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 90,
          "end": 91
        },
        "operator": "+",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": null,
          "start": 94,
          "end": 95
        },
        "start": 90,
        "end": 95
      },
      "directive": null,
      "start": 90,
      "end": 96
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": null,
          "start": 97,
          "end": 98
        },
        "operator": "-",
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 101,
          "end": 102
        },
        "start": 97,
        "end": 102
      },
      "directive": null,
      "start": 97,
      "end": 103
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 104,
          "end": 105
        },
        "operator": "-",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": null,
          "start": 108,
          "end": 109
        },
        "start": 104,
        "end": 109
      },
      "directive": null,
      "start": 104,
      "end": 110
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "LogicalExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null,
            "start": 113,
            "end": 114
          },
          "operator": "||",
          "right": {
            "type": "Literal",
            "value": "",
            "raw": "\"\"",
            "start": 118,
            "end": 120
          },
          "start": 113,
          "end": 120
        },
        "operator": "+",
        "right": {
          "type": "Literal",
          "value": "",
          "raw": "\"\"",
          "start": 124,
          "end": 126
        },
        "start": 112,
        "end": 126
      },
      "directive": null,
      "start": 112,
      "end": 127
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": "",
          "raw": "\"\"",
          "start": 128,
          "end": 130
        },
        "operator": "+",
        "right": {
          "type": "LogicalExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null,
            "start": 134,
            "end": 135
          },
          "operator": "||",
          "right": {
            "type": "Literal",
            "value": "",
            "raw": "\"\"",
            "start": 139,
            "end": 141
          },
          "start": 134,
          "end": 141
        },
        "start": 128,
        "end": 142
      },
      "directive": null,
      "start": 128,
      "end": 143
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 143
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 0,
    "end": 3
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 4,
    "end": 5
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6,
    "end": 7
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 8,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 14,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "for",
    "start": 15,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 18,
    "end": 19
  },
  {
    "type": "String",
    "value": "\"add\"",
    "start": 19,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 24,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 25,
    "end": 26
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 27,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 31,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 32,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 34,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 37,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 41,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 43,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 44,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 48,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 50,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 51,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 53,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 55,
    "end": 56
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 57,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 59,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 63,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 66,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 70,
    "end": 71
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 73,
    "end": 74
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 75,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 78,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 81,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 85,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 88,
    "end": 89
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 92,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 95,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 99,
    "end": 100
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 102,
    "end": 103
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 104,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 106,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 112,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 115,
    "end": 117
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 118,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 120,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 122,
    "end": 123
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 124,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 126,
    "end": 127
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 128,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 133,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 134,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 136,
    "end": 138
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 139,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 142,
    "end": 143
  }
]
```
