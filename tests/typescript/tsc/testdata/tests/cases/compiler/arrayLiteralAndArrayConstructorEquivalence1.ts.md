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
            "name": "myCars",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 10
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 15,
              "end": 20
            },
            "typeArguments": null,
            "arguments": [],
            "start": 11,
            "end": 22
          },
          "definite": false,
          "start": 4,
          "end": 22
        }
      ],
      "declare": false,
      "start": 0,
      "end": 23
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
            "name": "myCars3",
            "optional": false,
            "typeAnnotation": null,
            "start": 29,
            "end": 36
          },
          "init": {
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
                "type": "ObjectExpression",
                "properties": [],
                "start": 49,
                "end": 51
              }
            ],
            "start": 39,
            "end": 52
          },
          "definite": false,
          "start": 29,
          "end": 52
        }
      ],
      "declare": false,
      "start": 25,
      "end": 53
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
            "name": "myCars4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Array",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 75,
                  "end": 80
                },
                "typeArguments": null,
                "start": 75,
                "end": 80
              },
              "start": 73,
              "end": 80
            },
            "start": 66,
            "end": 80
          },
          "init": null,
          "definite": false,
          "start": 66,
          "end": 80
        }
      ],
      "declare": true,
      "start": 54,
      "end": 81
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
            "name": "myCars5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Array",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 112,
                    "end": 117
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSAnyKeyword",
                        "start": 118,
                        "end": 121
                      }
                    ],
                    "start": 117,
                    "end": 122
                  },
                  "start": 112,
                  "end": 122
                },
                "start": 112,
                "end": 124
              },
              "start": 110,
              "end": 124
            },
            "start": 103,
            "end": 124
          },
          "init": null,
          "definite": false,
          "start": 103,
          "end": 124
        }
      ],
      "declare": true,
      "start": 91,
      "end": 125
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "myCars",
          "optional": false,
          "typeAnnotation": null,
          "start": 128,
          "end": 134
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "myCars3",
          "optional": false,
          "typeAnnotation": null,
          "start": 137,
          "end": 144
        },
        "start": 128,
        "end": 144
      },
      "directive": null,
      "start": 128,
      "end": 145
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "myCars",
          "optional": false,
          "typeAnnotation": null,
          "start": 146,
          "end": 152
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "myCars4",
          "optional": false,
          "typeAnnotation": null,
          "start": 155,
          "end": 162
        },
        "start": 146,
        "end": 162
      },
      "directive": null,
      "start": 146,
      "end": 163
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "myCars",
          "optional": false,
          "typeAnnotation": null,
          "start": 164,
          "end": 170
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "myCars5",
          "optional": false,
          "typeAnnotation": null,
          "start": 173,
          "end": 180
        },
        "start": 164,
        "end": 180
      },
      "directive": null,
      "start": 164,
      "end": 181
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "myCars3",
          "optional": false,
          "typeAnnotation": null,
          "start": 184,
          "end": 191
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "myCars",
          "optional": false,
          "typeAnnotation": null,
          "start": 194,
          "end": 200
        },
        "start": 184,
        "end": 200
      },
      "directive": null,
      "start": 184,
      "end": 201
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "myCars3",
          "optional": false,
          "typeAnnotation": null,
          "start": 202,
          "end": 209
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "myCars4",
          "optional": false,
          "typeAnnotation": null,
          "start": 212,
          "end": 219
        },
        "start": 202,
        "end": 219
      },
      "directive": null,
      "start": 202,
      "end": 220
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "myCars3",
          "optional": false,
          "typeAnnotation": null,
          "start": 221,
          "end": 228
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "myCars5",
          "optional": false,
          "typeAnnotation": null,
          "start": 231,
          "end": 238
        },
        "start": 221,
        "end": 238
      },
      "directive": null,
      "start": 221,
      "end": 239
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 242
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
    "value": "myCars",
    "start": 4,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 10,
    "end": 11
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 11,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 15,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 20,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 21,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 22,
    "end": 23
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 25,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "myCars3",
    "start": 29,
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
    "type": "Punctuator",
    "value": "{",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 50,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 51,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 52,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 54,
    "end": 61
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 62,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "myCars4",
    "start": 66,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 73,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 75,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 80,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 91,
    "end": 98
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 99,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "myCars5",
    "start": 103,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 110,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 112,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 117,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 118,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 124,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "myCars",
    "start": 128,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 135,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "myCars3",
    "start": 137,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 144,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "myCars",
    "start": 146,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 153,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "myCars4",
    "start": 155,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 162,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "myCars",
    "start": 164,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 171,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "myCars5",
    "start": 173,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 180,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "myCars3",
    "start": 184,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 192,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "myCars",
    "start": 194,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 200,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "myCars3",
    "start": 202,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 210,
    "end": 211
  },
  {
    "type": "Identifier",
    "value": "myCars4",
    "start": 212,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 219,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "myCars3",
    "start": 221,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 229,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "myCars5",
    "start": 231,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 238,
    "end": 239
  }
]
```
