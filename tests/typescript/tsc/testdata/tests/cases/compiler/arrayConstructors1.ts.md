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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 7,
                  "end": 13
                },
                "start": 7,
                "end": 15
              },
              "start": 5,
              "end": 15
            },
            "start": 4,
            "end": 15
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 15
        }
      ],
      "declare": false,
      "start": 0,
      "end": 16
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 17,
          "end": 18
        },
        "right": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "Array",
            "optional": false,
            "typeAnnotation": null,
            "start": 25,
            "end": 30
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 31,
              "end": 32
            }
          ],
          "start": 21,
          "end": 33
        },
        "start": 17,
        "end": 33
      },
      "directive": null,
      "start": 17,
      "end": 34
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 35,
          "end": 36
        },
        "right": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "Array",
            "optional": false,
            "typeAnnotation": null,
            "start": 43,
            "end": 48
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "hi",
              "raw": "'hi'",
              "start": 49,
              "end": 53
            },
            {
              "type": "Literal",
              "value": "bye",
              "raw": "'bye'",
              "start": 55,
              "end": 60
            }
          ],
          "start": 39,
          "end": 61
        },
        "start": 35,
        "end": 61
      },
      "directive": null,
      "start": 35,
      "end": 62
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 64,
          "end": 65
        },
        "right": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "Array",
            "optional": false,
            "typeAnnotation": null,
            "start": 72,
            "end": 77
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 78,
                "end": 84
              }
            ],
            "start": 77,
            "end": 85
          },
          "arguments": [
            {
              "type": "Literal",
              "value": "hi",
              "raw": "'hi'",
              "start": 86,
              "end": 90
            },
            {
              "type": "Literal",
              "value": "bye",
              "raw": "'bye'",
              "start": 92,
              "end": 97
            }
          ],
          "start": 68,
          "end": 98
        },
        "start": 64,
        "end": 98
      },
      "directive": null,
      "start": 64,
      "end": 99
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
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 108,
                  "end": 114
                },
                "start": 108,
                "end": 116
              },
              "start": 106,
              "end": 116
            },
            "start": 105,
            "end": 116
          },
          "init": null,
          "definite": false,
          "start": 105,
          "end": 116
        }
      ],
      "declare": false,
      "start": 101,
      "end": 117
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null,
          "start": 118,
          "end": 119
        },
        "right": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "Array",
            "optional": false,
            "typeAnnotation": null,
            "start": 126,
            "end": 131
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 132,
              "end": 133
            }
          ],
          "start": 122,
          "end": 134
        },
        "start": 118,
        "end": 134
      },
      "directive": null,
      "start": 118,
      "end": 135
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null,
          "start": 136,
          "end": 137
        },
        "right": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "Array",
            "optional": false,
            "typeAnnotation": null,
            "start": 144,
            "end": 149
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 150,
              "end": 151
            },
            {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 152,
              "end": 153
            }
          ],
          "start": 140,
          "end": 154
        },
        "start": 136,
        "end": 154
      },
      "directive": null,
      "start": 136,
      "end": 155
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null,
          "start": 156,
          "end": 157
        },
        "right": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "Array",
            "optional": false,
            "typeAnnotation": null,
            "start": 164,
            "end": 169
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 170,
                "end": 176
              }
            ],
            "start": 169,
            "end": 177
          },
          "arguments": [
            {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 178,
              "end": 179
            },
            {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 181,
              "end": 182
            }
          ],
          "start": 160,
          "end": 183
        },
        "start": 156,
        "end": 183
      },
      "directive": null,
      "start": 156,
      "end": 184
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 184
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
    "value": "x",
    "start": 4,
    "end": 5
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5,
    "end": 6
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 7,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 13,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 14,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 15,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 17,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 19,
    "end": 20
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 21,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 25,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 30,
    "end": 31
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 31,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 32,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 33,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 35,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 37,
    "end": 38
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 39,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 43,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 48,
    "end": 49
  },
  {
    "type": "String",
    "value": "'hi'",
    "start": 49,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 53,
    "end": 54
  },
  {
    "type": "String",
    "value": "'bye'",
    "start": 55,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 60,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 61,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 64,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 66,
    "end": 67
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 68,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 72,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 77,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 78,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 85,
    "end": 86
  },
  {
    "type": "String",
    "value": "'hi'",
    "start": 86,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 90,
    "end": 91
  },
  {
    "type": "String",
    "value": "'bye'",
    "start": 92,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 98,
    "end": 99
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 101,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 105,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 106,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 108,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 116,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 118,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 120,
    "end": 121
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 122,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 126,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 131,
    "end": 132
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 132,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 133,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 134,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 138,
    "end": 139
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 140,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 144,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 149,
    "end": 150
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 151,
    "end": 152
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 152,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 154,
    "end": 155
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 158,
    "end": 159
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 160,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 164,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 169,
    "end": 170
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 170,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 177,
    "end": 178
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 179,
    "end": 180
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 181,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 182,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 183,
    "end": 184
  }
]
```
