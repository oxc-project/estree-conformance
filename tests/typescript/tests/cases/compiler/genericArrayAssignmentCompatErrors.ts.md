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
            "name": "myCars2",
            "optional": false,
            "typeAnnotation": null,
            "start": 29,
            "end": 36
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "ArrayExpression",
              "elements": [],
              "start": 43,
              "end": 45
            },
            "typeArguments": null,
            "arguments": [],
            "start": 39,
            "end": 45
          },
          "definite": false,
          "start": 29,
          "end": 45
        }
      ],
      "declare": false,
      "start": 25,
      "end": 46
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
            "start": 51,
            "end": 58
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 65,
              "end": 70
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [],
                "start": 71,
                "end": 73
              }
            ],
            "start": 61,
            "end": 74
          },
          "definite": false,
          "start": 51,
          "end": 74
        }
      ],
      "declare": false,
      "start": 47,
      "end": 75
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
                  "start": 97,
                  "end": 102
                },
                "typeArguments": null,
                "start": 97,
                "end": 102
              },
              "start": 95,
              "end": 102
            },
            "start": 88,
            "end": 102
          },
          "init": null,
          "definite": false,
          "start": 88,
          "end": 102
        }
      ],
      "declare": true,
      "start": 76,
      "end": 103
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
                    "start": 134,
                    "end": 139
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSAnyKeyword",
                        "start": 140,
                        "end": 143
                      }
                    ],
                    "start": 139,
                    "end": 144
                  },
                  "start": 134,
                  "end": 144
                },
                "start": 134,
                "end": 146
              },
              "start": 132,
              "end": 146
            },
            "start": 125,
            "end": 146
          },
          "init": null,
          "definite": false,
          "start": 125,
          "end": 146
        }
      ],
      "declare": true,
      "start": 113,
      "end": 147
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
          "start": 150,
          "end": 156
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "myCars2",
          "optional": false,
          "typeAnnotation": null,
          "start": 159,
          "end": 166
        },
        "start": 150,
        "end": 166
      },
      "directive": null,
      "start": 150,
      "end": 167
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
          "start": 168,
          "end": 174
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "myCars3",
          "optional": false,
          "typeAnnotation": null,
          "start": 177,
          "end": 184
        },
        "start": 168,
        "end": 184
      },
      "directive": null,
      "start": 168,
      "end": 185
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
          "start": 186,
          "end": 192
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "myCars4",
          "optional": false,
          "typeAnnotation": null,
          "start": 195,
          "end": 202
        },
        "start": 186,
        "end": 202
      },
      "directive": null,
      "start": 186,
      "end": 203
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
          "start": 204,
          "end": 210
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "myCars5",
          "optional": false,
          "typeAnnotation": null,
          "start": 213,
          "end": 220
        },
        "start": 204,
        "end": 220
      },
      "directive": null,
      "start": 204,
      "end": 221
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "myCars2",
          "optional": false,
          "typeAnnotation": null,
          "start": 224,
          "end": 231
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "myCars",
          "optional": false,
          "typeAnnotation": null,
          "start": 234,
          "end": 240
        },
        "start": 224,
        "end": 240
      },
      "directive": null,
      "start": 224,
      "end": 241
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "myCars2",
          "optional": false,
          "typeAnnotation": null,
          "start": 242,
          "end": 249
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "myCars3",
          "optional": false,
          "typeAnnotation": null,
          "start": 252,
          "end": 259
        },
        "start": 242,
        "end": 259
      },
      "directive": null,
      "start": 242,
      "end": 260
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "myCars2",
          "optional": false,
          "typeAnnotation": null,
          "start": 261,
          "end": 268
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "myCars4",
          "optional": false,
          "typeAnnotation": null,
          "start": 271,
          "end": 278
        },
        "start": 261,
        "end": 278
      },
      "directive": null,
      "start": 261,
      "end": 279
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "myCars2",
          "optional": false,
          "typeAnnotation": null,
          "start": 280,
          "end": 287
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "myCars5",
          "optional": false,
          "typeAnnotation": null,
          "start": 290,
          "end": 297
        },
        "start": 280,
        "end": 297
      },
      "directive": null,
      "start": 280,
      "end": 298
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
          "start": 301,
          "end": 308
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "myCars",
          "optional": false,
          "typeAnnotation": null,
          "start": 311,
          "end": 317
        },
        "start": 301,
        "end": 317
      },
      "directive": null,
      "start": 301,
      "end": 318
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
          "start": 319,
          "end": 326
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "myCars2",
          "optional": false,
          "typeAnnotation": null,
          "start": 329,
          "end": 336
        },
        "start": 319,
        "end": 336
      },
      "directive": null,
      "start": 319,
      "end": 337
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
          "start": 338,
          "end": 345
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "myCars4",
          "optional": false,
          "typeAnnotation": null,
          "start": 348,
          "end": 355
        },
        "start": 338,
        "end": 355
      },
      "directive": null,
      "start": 338,
      "end": 356
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
          "start": 357,
          "end": 364
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "myCars5",
          "optional": false,
          "typeAnnotation": null,
          "start": 367,
          "end": 374
        },
        "start": 357,
        "end": 374
      },
      "directive": null,
      "start": 357,
      "end": 375
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 378
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
    "value": "myCars2",
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
    "type": "Punctuator",
    "value": "[",
    "start": 43,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 44,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 45,
    "end": 46
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 47,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "myCars3",
    "start": 51,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 59,
    "end": 60
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 61,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 65,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 74,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 76,
    "end": 83
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 84,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "myCars4",
    "start": 88,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 95,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 97,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 102,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 113,
    "end": 120
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 121,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "myCars5",
    "start": 125,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 132,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 134,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 139,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 140,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 145,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 146,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "myCars",
    "start": 150,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 157,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "myCars2",
    "start": 159,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 166,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "myCars",
    "start": 168,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 175,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "myCars3",
    "start": 177,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 184,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "myCars",
    "start": 186,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 193,
    "end": 194
  },
  {
    "type": "Identifier",
    "value": "myCars4",
    "start": 195,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 202,
    "end": 203
  },
  {
    "type": "Identifier",
    "value": "myCars",
    "start": 204,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 211,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "myCars5",
    "start": 213,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 220,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "myCars2",
    "start": 224,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 232,
    "end": 233
  },
  {
    "type": "Identifier",
    "value": "myCars",
    "start": 234,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 240,
    "end": 241
  },
  {
    "type": "Identifier",
    "value": "myCars2",
    "start": 242,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 250,
    "end": 251
  },
  {
    "type": "Identifier",
    "value": "myCars3",
    "start": 252,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 259,
    "end": 260
  },
  {
    "type": "Identifier",
    "value": "myCars2",
    "start": 261,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 269,
    "end": 270
  },
  {
    "type": "Identifier",
    "value": "myCars4",
    "start": 271,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 278,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "myCars2",
    "start": 280,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 288,
    "end": 289
  },
  {
    "type": "Identifier",
    "value": "myCars5",
    "start": 290,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 297,
    "end": 298
  },
  {
    "type": "Identifier",
    "value": "myCars3",
    "start": 301,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 309,
    "end": 310
  },
  {
    "type": "Identifier",
    "value": "myCars",
    "start": 311,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 317,
    "end": 318
  },
  {
    "type": "Identifier",
    "value": "myCars3",
    "start": 319,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 327,
    "end": 328
  },
  {
    "type": "Identifier",
    "value": "myCars2",
    "start": 329,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 336,
    "end": 337
  },
  {
    "type": "Identifier",
    "value": "myCars3",
    "start": 338,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 346,
    "end": 347
  },
  {
    "type": "Identifier",
    "value": "myCars4",
    "start": 348,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 355,
    "end": 356
  },
  {
    "type": "Identifier",
    "value": "myCars3",
    "start": 357,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 365,
    "end": 366
  },
  {
    "type": "Identifier",
    "value": "myCars5",
    "start": 367,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 374,
    "end": 375
  }
]
```
