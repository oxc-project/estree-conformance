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
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 11
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 12,
              "end": 13
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 12,
            "end": 13
          }
        ],
        "start": 11,
        "end": 14
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 18,
                "end": 19
              },
              "typeArguments": null,
              "start": 18,
              "end": 19
            },
            "start": 16,
            "end": 19
          },
          "start": 15,
          "end": 19
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 30,
                  "end": 31
                },
                "typeArguments": null,
                "start": 30,
                "end": 31
              },
              "start": 24,
              "end": 31
            },
            "start": 22,
            "end": 31
          },
          "start": 21,
          "end": 31
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 46,
                "end": 47
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "k",
                "optional": false,
                "typeAnnotation": null,
                "start": 48,
                "end": 49
              },
              "optional": false,
              "computed": true,
              "start": 46,
              "end": 50
            },
            "start": 39,
            "end": 51
          }
        ],
        "start": 33,
        "end": 53
      },
      "expression": false,
      "start": 0,
      "end": 53
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 64,
        "end": 66
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 67,
              "end": 68
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 67,
            "end": 68
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 70,
              "end": 71
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 86,
                  "end": 87
                },
                "typeArguments": null,
                "start": 86,
                "end": 87
              },
              "start": 80,
              "end": 87
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 70,
            "end": 87
          }
        ],
        "start": 66,
        "end": 88
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 92,
                "end": 93
              },
              "typeArguments": null,
              "start": 92,
              "end": 93
            },
            "start": 90,
            "end": 93
          },
          "start": 89,
          "end": 93
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 98,
                "end": 99
              },
              "typeArguments": null,
              "start": 98,
              "end": 99
            },
            "start": 96,
            "end": 99
          },
          "start": 95,
          "end": 99
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 114,
                "end": 115
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "k",
                "optional": false,
                "typeAnnotation": null,
                "start": 116,
                "end": 117
              },
              "optional": false,
              "computed": true,
              "start": 114,
              "end": 118
            },
            "start": 107,
            "end": 119
          }
        ],
        "start": 101,
        "end": 121
      },
      "expression": false,
      "start": 55,
      "end": 121
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 132,
        "end": 134
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 135,
              "end": 136
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 135,
            "end": 136
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 138,
              "end": 139
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 148,
                "end": 149
              },
              "typeArguments": null,
              "start": 148,
              "end": 149
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 138,
            "end": 149
          }
        ],
        "start": 134,
        "end": 150
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 154,
                "end": 155
              },
              "typeArguments": null,
              "start": 154,
              "end": 155
            },
            "start": 152,
            "end": 155
          },
          "start": 151,
          "end": 155
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 160,
                "end": 161
              },
              "typeArguments": null,
              "start": 160,
              "end": 161
            },
            "start": 158,
            "end": 161
          },
          "start": 157,
          "end": 161
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 172,
                  "end": 173
                },
                "typeArguments": null,
                "start": 172,
                "end": 173
              },
              "start": 166,
              "end": 173
            },
            "start": 164,
            "end": 173
          },
          "start": 163,
          "end": 173
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 181,
                  "end": 182
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 183,
                  "end": 184
                },
                "optional": false,
                "computed": true,
                "start": 181,
                "end": 185
              },
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 188,
                  "end": 189
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 190,
                  "end": 191
                },
                "optional": false,
                "computed": true,
                "start": 188,
                "end": 192
              },
              "start": 181,
              "end": 192
            },
            "directive": null,
            "start": 181,
            "end": 193
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 198,
                  "end": 199
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 200,
                  "end": 201
                },
                "optional": false,
                "computed": true,
                "start": 198,
                "end": 202
              },
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 205,
                  "end": 206
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 207,
                  "end": 208
                },
                "optional": false,
                "computed": true,
                "start": 205,
                "end": 209
              },
              "start": 198,
              "end": 209
            },
            "directive": null,
            "start": 198,
            "end": 210
          }
        ],
        "start": 175,
        "end": 222
      },
      "expression": false,
      "start": 123,
      "end": 222
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 233,
        "end": 235
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 236,
              "end": 237
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 236,
            "end": 237
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 239,
              "end": 240
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 249,
                "end": 250
              },
              "typeArguments": null,
              "start": 249,
              "end": 250
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 239,
            "end": 250
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 252,
              "end": 253
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 268,
                  "end": 269
                },
                "typeArguments": null,
                "start": 268,
                "end": 269
              },
              "start": 262,
              "end": 269
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 252,
            "end": 269
          }
        ],
        "start": 235,
        "end": 270
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 274,
                "end": 275
              },
              "typeArguments": null,
              "start": 274,
              "end": 275
            },
            "start": 272,
            "end": 275
          },
          "start": 271,
          "end": 275
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 280,
                "end": 281
              },
              "typeArguments": null,
              "start": 280,
              "end": 281
            },
            "start": 278,
            "end": 281
          },
          "start": 277,
          "end": 281
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 286,
                "end": 287
              },
              "typeArguments": null,
              "start": 286,
              "end": 287
            },
            "start": 284,
            "end": 287
          },
          "start": 283,
          "end": 287
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 295,
                  "end": 296
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 297,
                  "end": 298
                },
                "optional": false,
                "computed": true,
                "start": 295,
                "end": 299
              },
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 302,
                  "end": 303
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 304,
                  "end": 305
                },
                "optional": false,
                "computed": true,
                "start": 302,
                "end": 306
              },
              "start": 295,
              "end": 306
            },
            "directive": null,
            "start": 295,
            "end": 307
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 312,
                  "end": 313
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 314,
                  "end": 315
                },
                "optional": false,
                "computed": true,
                "start": 312,
                "end": 316
              },
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 319,
                  "end": 320
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 321,
                  "end": 322
                },
                "optional": false,
                "computed": true,
                "start": 319,
                "end": 323
              },
              "start": 312,
              "end": 323
            },
            "directive": null,
            "start": 312,
            "end": 324
          }
        ],
        "start": 289,
        "end": 336
      },
      "expression": false,
      "start": 224,
      "end": 336
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null,
        "start": 347,
        "end": 349
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 350,
              "end": 351
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 350,
            "end": 351
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 353,
              "end": 354
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 363,
                "end": 364
              },
              "typeArguments": null,
              "start": 363,
              "end": 364
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 353,
            "end": 364
          }
        ],
        "start": 349,
        "end": 365
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 369,
                "end": 370
              },
              "typeArguments": null,
              "start": 369,
              "end": 370
            },
            "start": 367,
            "end": 370
          },
          "start": 366,
          "end": 370
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 375,
                "end": 376
              },
              "typeArguments": null,
              "start": 375,
              "end": 376
            },
            "start": 373,
            "end": 376
          },
          "start": 372,
          "end": 376
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 387,
                  "end": 388
                },
                "typeArguments": null,
                "start": 387,
                "end": 388
              },
              "start": 381,
              "end": 388
            },
            "start": 379,
            "end": 388
          },
          "start": 378,
          "end": 388
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 396,
                  "end": 397
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 398,
                  "end": 399
                },
                "optional": false,
                "computed": true,
                "start": 396,
                "end": 400
              },
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 403,
                  "end": 404
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 405,
                  "end": 406
                },
                "optional": false,
                "computed": true,
                "start": 403,
                "end": 407
              },
              "start": 396,
              "end": 407
            },
            "directive": null,
            "start": 396,
            "end": 408
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 423,
                  "end": 424
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 425,
                  "end": 426
                },
                "optional": false,
                "computed": true,
                "start": 423,
                "end": 427
              },
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 430,
                  "end": 431
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 432,
                  "end": 433
                },
                "optional": false,
                "computed": true,
                "start": 430,
                "end": 434
              },
              "start": 423,
              "end": 434
            },
            "directive": null,
            "start": 423,
            "end": 435
          }
        ],
        "start": 390,
        "end": 447
      },
      "expression": false,
      "start": 338,
      "end": 447
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f6",
        "optional": false,
        "typeAnnotation": null,
        "start": 458,
        "end": 460
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 461,
              "end": 462
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 461,
            "end": 462
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 464,
              "end": 465
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 474,
                "end": 475
              },
              "typeArguments": null,
              "start": 474,
              "end": 475
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 464,
            "end": 475
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 477,
              "end": 478
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 493,
                  "end": 494
                },
                "typeArguments": null,
                "start": 493,
                "end": 494
              },
              "start": 487,
              "end": 494
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 477,
            "end": 494
          }
        ],
        "start": 460,
        "end": 495
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 499,
                "end": 500
              },
              "typeArguments": null,
              "start": 499,
              "end": 500
            },
            "start": 497,
            "end": 500
          },
          "start": 496,
          "end": 500
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 505,
                "end": 506
              },
              "typeArguments": null,
              "start": 505,
              "end": 506
            },
            "start": 503,
            "end": 506
          },
          "start": 502,
          "end": 506
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 511,
                "end": 512
              },
              "typeArguments": null,
              "start": 511,
              "end": 512
            },
            "start": 509,
            "end": 512
          },
          "start": 508,
          "end": 512
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 520,
                  "end": 521
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 522,
                  "end": 523
                },
                "optional": false,
                "computed": true,
                "start": 520,
                "end": 524
              },
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 527,
                  "end": 528
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 529,
                  "end": 530
                },
                "optional": false,
                "computed": true,
                "start": 527,
                "end": 531
              },
              "start": 520,
              "end": 531
            },
            "directive": null,
            "start": 520,
            "end": 532
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 547,
                  "end": 548
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 549,
                  "end": 550
                },
                "optional": false,
                "computed": true,
                "start": 547,
                "end": 551
              },
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 554,
                  "end": 555
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 556,
                  "end": 557
                },
                "optional": false,
                "computed": true,
                "start": 554,
                "end": 558
              },
              "start": 547,
              "end": 558
            },
            "directive": null,
            "start": 547,
            "end": 559
          }
        ],
        "start": 514,
        "end": 571
      },
      "expression": false,
      "start": 449,
      "end": 571
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f10",
        "optional": false,
        "typeAnnotation": null,
        "start": 582,
        "end": 585
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 586,
              "end": 587
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 586,
            "end": 587
          }
        ],
        "start": 585,
        "end": 588
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 592,
                "end": 593
              },
              "typeArguments": null,
              "start": 592,
              "end": 593
            },
            "start": 590,
            "end": 593
          },
          "start": 589,
          "end": 593
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Partial",
                "optional": false,
                "typeAnnotation": null,
                "start": 598,
                "end": 605
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 606,
                      "end": 607
                    },
                    "typeArguments": null,
                    "start": 606,
                    "end": 607
                  }
                ],
                "start": 605,
                "end": 608
              },
              "start": 598,
              "end": 608
            },
            "start": 596,
            "end": 608
          },
          "start": 595,
          "end": 608
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 619,
                  "end": 620
                },
                "typeArguments": null,
                "start": 619,
                "end": 620
              },
              "start": 613,
              "end": 620
            },
            "start": 611,
            "end": 620
          },
          "start": 610,
          "end": 620
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 628,
                  "end": 629
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 630,
                  "end": 631
                },
                "optional": false,
                "computed": true,
                "start": 628,
                "end": 632
              },
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 635,
                  "end": 636
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 637,
                  "end": 638
                },
                "optional": false,
                "computed": true,
                "start": 635,
                "end": 639
              },
              "start": 628,
              "end": 639
            },
            "directive": null,
            "start": 628,
            "end": 640
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 655,
                  "end": 656
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 657,
                  "end": 658
                },
                "optional": false,
                "computed": true,
                "start": 655,
                "end": 659
              },
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 662,
                  "end": 663
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 664,
                  "end": 665
                },
                "optional": false,
                "computed": true,
                "start": 662,
                "end": 666
              },
              "start": 655,
              "end": 666
            },
            "directive": null,
            "start": 655,
            "end": 667
          }
        ],
        "start": 622,
        "end": 669
      },
      "expression": false,
      "start": 573,
      "end": 669
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f11",
        "optional": false,
        "typeAnnotation": null,
        "start": 680,
        "end": 683
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 684,
              "end": 685
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 684,
            "end": 685
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 687,
              "end": 688
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 703,
                  "end": 704
                },
                "typeArguments": null,
                "start": 703,
                "end": 704
              },
              "start": 697,
              "end": 704
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 687,
            "end": 704
          }
        ],
        "start": 683,
        "end": 705
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 709,
                "end": 710
              },
              "typeArguments": null,
              "start": 709,
              "end": 710
            },
            "start": 707,
            "end": 710
          },
          "start": 706,
          "end": 710
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Partial",
                "optional": false,
                "typeAnnotation": null,
                "start": 715,
                "end": 722
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 723,
                      "end": 724
                    },
                    "typeArguments": null,
                    "start": 723,
                    "end": 724
                  }
                ],
                "start": 722,
                "end": 725
              },
              "start": 715,
              "end": 725
            },
            "start": 713,
            "end": 725
          },
          "start": 712,
          "end": 725
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 730,
                "end": 731
              },
              "typeArguments": null,
              "start": 730,
              "end": 731
            },
            "start": 728,
            "end": 731
          },
          "start": 727,
          "end": 731
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 739,
                  "end": 740
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 741,
                  "end": 742
                },
                "optional": false,
                "computed": true,
                "start": 739,
                "end": 743
              },
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 746,
                  "end": 747
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 748,
                  "end": 749
                },
                "optional": false,
                "computed": true,
                "start": 746,
                "end": 750
              },
              "start": 739,
              "end": 750
            },
            "directive": null,
            "start": 739,
            "end": 751
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 766,
                  "end": 767
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 768,
                  "end": 769
                },
                "optional": false,
                "computed": true,
                "start": 766,
                "end": 770
              },
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 773,
                  "end": 774
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 775,
                  "end": 776
                },
                "optional": false,
                "computed": true,
                "start": 773,
                "end": 777
              },
              "start": 766,
              "end": 777
            },
            "directive": null,
            "start": 766,
            "end": 778
          }
        ],
        "start": 733,
        "end": 780
      },
      "expression": false,
      "start": 671,
      "end": 780
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f12",
        "optional": false,
        "typeAnnotation": null,
        "start": 791,
        "end": 794
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 795,
              "end": 796
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 795,
            "end": 796
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 798,
              "end": 799
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 808,
                "end": 809
              },
              "typeArguments": null,
              "start": 808,
              "end": 809
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 798,
            "end": 809
          }
        ],
        "start": 794,
        "end": 810
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 814,
                "end": 815
              },
              "typeArguments": null,
              "start": 814,
              "end": 815
            },
            "start": 812,
            "end": 815
          },
          "start": 811,
          "end": 815
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Partial",
                "optional": false,
                "typeAnnotation": null,
                "start": 820,
                "end": 827
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 828,
                      "end": 829
                    },
                    "typeArguments": null,
                    "start": 828,
                    "end": 829
                  }
                ],
                "start": 827,
                "end": 830
              },
              "start": 820,
              "end": 830
            },
            "start": 818,
            "end": 830
          },
          "start": 817,
          "end": 830
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 841,
                  "end": 842
                },
                "typeArguments": null,
                "start": 841,
                "end": 842
              },
              "start": 835,
              "end": 842
            },
            "start": 833,
            "end": 842
          },
          "start": 832,
          "end": 842
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 850,
                  "end": 851
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 852,
                  "end": 853
                },
                "optional": false,
                "computed": true,
                "start": 850,
                "end": 854
              },
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 857,
                  "end": 858
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 859,
                  "end": 860
                },
                "optional": false,
                "computed": true,
                "start": 857,
                "end": 861
              },
              "start": 850,
              "end": 861
            },
            "directive": null,
            "start": 850,
            "end": 862
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 877,
                  "end": 878
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 879,
                  "end": 880
                },
                "optional": false,
                "computed": true,
                "start": 877,
                "end": 881
              },
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 884,
                  "end": 885
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 886,
                  "end": 887
                },
                "optional": false,
                "computed": true,
                "start": 884,
                "end": 888
              },
              "start": 877,
              "end": 888
            },
            "directive": null,
            "start": 877,
            "end": 889
          }
        ],
        "start": 844,
        "end": 901
      },
      "expression": false,
      "start": 782,
      "end": 901
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f13",
        "optional": false,
        "typeAnnotation": null,
        "start": 912,
        "end": 915
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 916,
              "end": 917
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 916,
            "end": 917
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 919,
              "end": 920
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 929,
                "end": 930
              },
              "typeArguments": null,
              "start": 929,
              "end": 930
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 919,
            "end": 930
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 932,
              "end": 933
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 948,
                  "end": 949
                },
                "typeArguments": null,
                "start": 948,
                "end": 949
              },
              "start": 942,
              "end": 949
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 932,
            "end": 949
          }
        ],
        "start": 915,
        "end": 950
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 954,
                "end": 955
              },
              "typeArguments": null,
              "start": 954,
              "end": 955
            },
            "start": 952,
            "end": 955
          },
          "start": 951,
          "end": 955
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Partial",
                "optional": false,
                "typeAnnotation": null,
                "start": 960,
                "end": 967
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 968,
                      "end": 969
                    },
                    "typeArguments": null,
                    "start": 968,
                    "end": 969
                  }
                ],
                "start": 967,
                "end": 970
              },
              "start": 960,
              "end": 970
            },
            "start": 958,
            "end": 970
          },
          "start": 957,
          "end": 970
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 975,
                "end": 976
              },
              "typeArguments": null,
              "start": 975,
              "end": 976
            },
            "start": 973,
            "end": 976
          },
          "start": 972,
          "end": 976
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 984,
                  "end": 985
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 986,
                  "end": 987
                },
                "optional": false,
                "computed": true,
                "start": 984,
                "end": 988
              },
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 991,
                  "end": 992
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 993,
                  "end": 994
                },
                "optional": false,
                "computed": true,
                "start": 991,
                "end": 995
              },
              "start": 984,
              "end": 995
            },
            "directive": null,
            "start": 984,
            "end": 996
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1011,
                  "end": 1012
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1013,
                  "end": 1014
                },
                "optional": false,
                "computed": true,
                "start": 1011,
                "end": 1015
              },
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1018,
                  "end": 1019
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1020,
                  "end": 1021
                },
                "optional": false,
                "computed": true,
                "start": 1018,
                "end": 1022
              },
              "start": 1011,
              "end": 1022
            },
            "directive": null,
            "start": 1011,
            "end": 1023
          }
        ],
        "start": 978,
        "end": 1035
      },
      "expression": false,
      "start": 903,
      "end": 1035
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f20",
        "optional": false,
        "typeAnnotation": null,
        "start": 1046,
        "end": 1049
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1050,
              "end": 1051
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1050,
            "end": 1051
          }
        ],
        "start": 1049,
        "end": 1052
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 1056,
                "end": 1057
              },
              "typeArguments": null,
              "start": 1056,
              "end": 1057
            },
            "start": 1054,
            "end": 1057
          },
          "start": 1053,
          "end": 1057
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Readonly",
                "optional": false,
                "typeAnnotation": null,
                "start": 1062,
                "end": 1070
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1071,
                      "end": 1072
                    },
                    "typeArguments": null,
                    "start": 1071,
                    "end": 1072
                  }
                ],
                "start": 1070,
                "end": 1073
              },
              "start": 1062,
              "end": 1073
            },
            "start": 1060,
            "end": 1073
          },
          "start": 1059,
          "end": 1073
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1084,
                  "end": 1085
                },
                "typeArguments": null,
                "start": 1084,
                "end": 1085
              },
              "start": 1078,
              "end": 1085
            },
            "start": 1076,
            "end": 1085
          },
          "start": 1075,
          "end": 1085
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1093,
                  "end": 1094
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1095,
                  "end": 1096
                },
                "optional": false,
                "computed": true,
                "start": 1093,
                "end": 1097
              },
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1100,
                  "end": 1101
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1102,
                  "end": 1103
                },
                "optional": false,
                "computed": true,
                "start": 1100,
                "end": 1104
              },
              "start": 1093,
              "end": 1104
            },
            "directive": null,
            "start": 1093,
            "end": 1105
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1110,
                  "end": 1111
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1112,
                  "end": 1113
                },
                "optional": false,
                "computed": true,
                "start": 1110,
                "end": 1114
              },
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1117,
                  "end": 1118
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1119,
                  "end": 1120
                },
                "optional": false,
                "computed": true,
                "start": 1117,
                "end": 1121
              },
              "start": 1110,
              "end": 1121
            },
            "directive": null,
            "start": 1110,
            "end": 1122
          }
        ],
        "start": 1087,
        "end": 1134
      },
      "expression": false,
      "start": 1037,
      "end": 1134
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f21",
        "optional": false,
        "typeAnnotation": null,
        "start": 1145,
        "end": 1148
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1149,
              "end": 1150
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1149,
            "end": 1150
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 1152,
              "end": 1153
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1168,
                  "end": 1169
                },
                "typeArguments": null,
                "start": 1168,
                "end": 1169
              },
              "start": 1162,
              "end": 1169
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1152,
            "end": 1169
          }
        ],
        "start": 1148,
        "end": 1170
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 1174,
                "end": 1175
              },
              "typeArguments": null,
              "start": 1174,
              "end": 1175
            },
            "start": 1172,
            "end": 1175
          },
          "start": 1171,
          "end": 1175
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Readonly",
                "optional": false,
                "typeAnnotation": null,
                "start": 1180,
                "end": 1188
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1189,
                      "end": 1190
                    },
                    "typeArguments": null,
                    "start": 1189,
                    "end": 1190
                  }
                ],
                "start": 1188,
                "end": 1191
              },
              "start": 1180,
              "end": 1191
            },
            "start": 1178,
            "end": 1191
          },
          "start": 1177,
          "end": 1191
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 1196,
                "end": 1197
              },
              "typeArguments": null,
              "start": 1196,
              "end": 1197
            },
            "start": 1194,
            "end": 1197
          },
          "start": 1193,
          "end": 1197
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1205,
                  "end": 1206
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1207,
                  "end": 1208
                },
                "optional": false,
                "computed": true,
                "start": 1205,
                "end": 1209
              },
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1212,
                  "end": 1213
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1214,
                  "end": 1215
                },
                "optional": false,
                "computed": true,
                "start": 1212,
                "end": 1216
              },
              "start": 1205,
              "end": 1216
            },
            "directive": null,
            "start": 1205,
            "end": 1217
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1222,
                  "end": 1223
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1224,
                  "end": 1225
                },
                "optional": false,
                "computed": true,
                "start": 1222,
                "end": 1226
              },
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1229,
                  "end": 1230
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1231,
                  "end": 1232
                },
                "optional": false,
                "computed": true,
                "start": 1229,
                "end": 1233
              },
              "start": 1222,
              "end": 1233
            },
            "directive": null,
            "start": 1222,
            "end": 1234
          }
        ],
        "start": 1199,
        "end": 1246
      },
      "expression": false,
      "start": 1136,
      "end": 1246
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f22",
        "optional": false,
        "typeAnnotation": null,
        "start": 1257,
        "end": 1260
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1261,
              "end": 1262
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1261,
            "end": 1262
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 1264,
              "end": 1265
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 1274,
                "end": 1275
              },
              "typeArguments": null,
              "start": 1274,
              "end": 1275
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1264,
            "end": 1275
          }
        ],
        "start": 1260,
        "end": 1276
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 1280,
                "end": 1281
              },
              "typeArguments": null,
              "start": 1280,
              "end": 1281
            },
            "start": 1278,
            "end": 1281
          },
          "start": 1277,
          "end": 1281
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Readonly",
                "optional": false,
                "typeAnnotation": null,
                "start": 1286,
                "end": 1294
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1295,
                      "end": 1296
                    },
                    "typeArguments": null,
                    "start": 1295,
                    "end": 1296
                  }
                ],
                "start": 1294,
                "end": 1297
              },
              "start": 1286,
              "end": 1297
            },
            "start": 1284,
            "end": 1297
          },
          "start": 1283,
          "end": 1297
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1308,
                  "end": 1309
                },
                "typeArguments": null,
                "start": 1308,
                "end": 1309
              },
              "start": 1302,
              "end": 1309
            },
            "start": 1300,
            "end": 1309
          },
          "start": 1299,
          "end": 1309
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1317,
                  "end": 1318
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1319,
                  "end": 1320
                },
                "optional": false,
                "computed": true,
                "start": 1317,
                "end": 1321
              },
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1324,
                  "end": 1325
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1326,
                  "end": 1327
                },
                "optional": false,
                "computed": true,
                "start": 1324,
                "end": 1328
              },
              "start": 1317,
              "end": 1328
            },
            "directive": null,
            "start": 1317,
            "end": 1329
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1334,
                  "end": 1335
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1336,
                  "end": 1337
                },
                "optional": false,
                "computed": true,
                "start": 1334,
                "end": 1338
              },
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1341,
                  "end": 1342
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1343,
                  "end": 1344
                },
                "optional": false,
                "computed": true,
                "start": 1341,
                "end": 1345
              },
              "start": 1334,
              "end": 1345
            },
            "directive": null,
            "start": 1334,
            "end": 1346
          }
        ],
        "start": 1311,
        "end": 1358
      },
      "expression": false,
      "start": 1248,
      "end": 1358
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f23",
        "optional": false,
        "typeAnnotation": null,
        "start": 1369,
        "end": 1372
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1373,
              "end": 1374
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1373,
            "end": 1374
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 1376,
              "end": 1377
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 1386,
                "end": 1387
              },
              "typeArguments": null,
              "start": 1386,
              "end": 1387
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1376,
            "end": 1387
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 1389,
              "end": 1390
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1405,
                  "end": 1406
                },
                "typeArguments": null,
                "start": 1405,
                "end": 1406
              },
              "start": 1399,
              "end": 1406
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1389,
            "end": 1406
          }
        ],
        "start": 1372,
        "end": 1407
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 1411,
                "end": 1412
              },
              "typeArguments": null,
              "start": 1411,
              "end": 1412
            },
            "start": 1409,
            "end": 1412
          },
          "start": 1408,
          "end": 1412
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Readonly",
                "optional": false,
                "typeAnnotation": null,
                "start": 1417,
                "end": 1425
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1426,
                      "end": 1427
                    },
                    "typeArguments": null,
                    "start": 1426,
                    "end": 1427
                  }
                ],
                "start": 1425,
                "end": 1428
              },
              "start": 1417,
              "end": 1428
            },
            "start": 1415,
            "end": 1428
          },
          "start": 1414,
          "end": 1428
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 1433,
                "end": 1434
              },
              "typeArguments": null,
              "start": 1433,
              "end": 1434
            },
            "start": 1431,
            "end": 1434
          },
          "start": 1430,
          "end": 1434
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1442,
                  "end": 1443
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1444,
                  "end": 1445
                },
                "optional": false,
                "computed": true,
                "start": 1442,
                "end": 1446
              },
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1449,
                  "end": 1450
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1451,
                  "end": 1452
                },
                "optional": false,
                "computed": true,
                "start": 1449,
                "end": 1453
              },
              "start": 1442,
              "end": 1453
            },
            "directive": null,
            "start": 1442,
            "end": 1454
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1459,
                  "end": 1460
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1461,
                  "end": 1462
                },
                "optional": false,
                "computed": true,
                "start": 1459,
                "end": 1463
              },
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1466,
                  "end": 1467
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1468,
                  "end": 1469
                },
                "optional": false,
                "computed": true,
                "start": 1466,
                "end": 1470
              },
              "start": 1459,
              "end": 1470
            },
            "directive": null,
            "start": 1459,
            "end": 1471
          }
        ],
        "start": 1436,
        "end": 1483
      },
      "expression": false,
      "start": 1360,
      "end": 1483
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Thing",
        "optional": false,
        "typeAnnotation": null,
        "start": 1490,
        "end": 1495
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1500,
              "end": 1501
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1503,
                "end": 1509
              },
              "start": 1501,
              "end": 1509
            },
            "accessibility": null,
            "static": false,
            "start": 1500,
            "end": 1510
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 1511,
              "end": 1512
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1514,
                "end": 1520
              },
              "start": 1512,
              "end": 1520
            },
            "accessibility": null,
            "static": false,
            "start": 1511,
            "end": 1520
          }
        ],
        "start": 1498,
        "end": 1522
      },
      "declare": false,
      "start": 1485,
      "end": 1523
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f30",
        "optional": false,
        "typeAnnotation": null,
        "start": 1534,
        "end": 1537
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1538,
              "end": 1539
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1538,
            "end": 1539
          }
        ],
        "start": 1537,
        "end": 1540
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 1544,
                "end": 1545
              },
              "typeArguments": null,
              "start": 1544,
              "end": 1545
            },
            "start": 1542,
            "end": 1545
          },
          "start": 1541,
          "end": 1545
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Partial",
                "optional": false,
                "typeAnnotation": null,
                "start": 1550,
                "end": 1557
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1558,
                      "end": 1559
                    },
                    "typeArguments": null,
                    "start": 1558,
                    "end": 1559
                  }
                ],
                "start": 1557,
                "end": 1560
              },
              "start": 1550,
              "end": 1560
            },
            "start": 1548,
            "end": 1560
          },
          "start": 1547,
          "end": 1560
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
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
                "start": 1568,
                "end": 1569
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 1572,
                "end": 1573
              },
              "start": 1568,
              "end": 1573
            },
            "directive": null,
            "start": 1568,
            "end": 1574
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
                "start": 1589,
                "end": 1590
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1593,
                "end": 1594
              },
              "start": 1589,
              "end": 1594
            },
            "directive": null,
            "start": 1589,
            "end": 1595
          }
        ],
        "start": 1562,
        "end": 1597
      },
      "expression": false,
      "start": 1525,
      "end": 1597
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f31",
        "optional": false,
        "typeAnnotation": null,
        "start": 1608,
        "end": 1611
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1612,
              "end": 1613
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Thing",
                "optional": false,
                "typeAnnotation": null,
                "start": 1622,
                "end": 1627
              },
              "typeArguments": null,
              "start": 1622,
              "end": 1627
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1612,
            "end": 1627
          }
        ],
        "start": 1611,
        "end": 1628
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Partial",
                "optional": false,
                "typeAnnotation": null,
                "start": 1632,
                "end": 1639
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Thing",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1640,
                      "end": 1645
                    },
                    "typeArguments": null,
                    "start": 1640,
                    "end": 1645
                  }
                ],
                "start": 1639,
                "end": 1646
              },
              "start": 1632,
              "end": 1646
            },
            "start": 1630,
            "end": 1646
          },
          "start": 1629,
          "end": 1646
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Partial",
                "optional": false,
                "typeAnnotation": null,
                "start": 1651,
                "end": 1658
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1659,
                      "end": 1660
                    },
                    "typeArguments": null,
                    "start": 1659,
                    "end": 1660
                  }
                ],
                "start": 1658,
                "end": 1661
              },
              "start": 1651,
              "end": 1661
            },
            "start": 1649,
            "end": 1661
          },
          "start": 1648,
          "end": 1661
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
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
                "start": 1669,
                "end": 1670
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 1673,
                "end": 1674
              },
              "start": 1669,
              "end": 1674
            },
            "directive": null,
            "start": 1669,
            "end": 1675
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
                "start": 1680,
                "end": 1681
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1684,
                "end": 1685
              },
              "start": 1680,
              "end": 1685
            },
            "directive": null,
            "start": 1680,
            "end": 1686
          }
        ],
        "start": 1663,
        "end": 1698
      },
      "expression": false,
      "start": 1599,
      "end": 1698
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f40",
        "optional": false,
        "typeAnnotation": null,
        "start": 1709,
        "end": 1712
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1713,
              "end": 1714
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1713,
            "end": 1714
          }
        ],
        "start": 1712,
        "end": 1715
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 1719,
                "end": 1720
              },
              "typeArguments": null,
              "start": 1719,
              "end": 1720
            },
            "start": 1717,
            "end": 1720
          },
          "start": 1716,
          "end": 1720
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Readonly",
                "optional": false,
                "typeAnnotation": null,
                "start": 1725,
                "end": 1733
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1734,
                      "end": 1735
                    },
                    "typeArguments": null,
                    "start": 1734,
                    "end": 1735
                  }
                ],
                "start": 1733,
                "end": 1736
              },
              "start": 1725,
              "end": 1736
            },
            "start": 1723,
            "end": 1736
          },
          "start": 1722,
          "end": 1736
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
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
                "start": 1744,
                "end": 1745
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 1748,
                "end": 1749
              },
              "start": 1744,
              "end": 1749
            },
            "directive": null,
            "start": 1744,
            "end": 1750
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
                "start": 1755,
                "end": 1756
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1759,
                "end": 1760
              },
              "start": 1755,
              "end": 1760
            },
            "directive": null,
            "start": 1755,
            "end": 1761
          }
        ],
        "start": 1738,
        "end": 1763
      },
      "expression": false,
      "start": 1700,
      "end": 1763
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f41",
        "optional": false,
        "typeAnnotation": null,
        "start": 1774,
        "end": 1777
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1778,
              "end": 1779
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Thing",
                "optional": false,
                "typeAnnotation": null,
                "start": 1788,
                "end": 1793
              },
              "typeArguments": null,
              "start": 1788,
              "end": 1793
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1778,
            "end": 1793
          }
        ],
        "start": 1777,
        "end": 1794
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Readonly",
                "optional": false,
                "typeAnnotation": null,
                "start": 1798,
                "end": 1806
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Thing",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1807,
                      "end": 1812
                    },
                    "typeArguments": null,
                    "start": 1807,
                    "end": 1812
                  }
                ],
                "start": 1806,
                "end": 1813
              },
              "start": 1798,
              "end": 1813
            },
            "start": 1796,
            "end": 1813
          },
          "start": 1795,
          "end": 1813
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Readonly",
                "optional": false,
                "typeAnnotation": null,
                "start": 1818,
                "end": 1826
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1827,
                      "end": 1828
                    },
                    "typeArguments": null,
                    "start": 1827,
                    "end": 1828
                  }
                ],
                "start": 1826,
                "end": 1829
              },
              "start": 1818,
              "end": 1829
            },
            "start": 1816,
            "end": 1829
          },
          "start": 1815,
          "end": 1829
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
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
                "start": 1837,
                "end": 1838
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 1841,
                "end": 1842
              },
              "start": 1837,
              "end": 1842
            },
            "directive": null,
            "start": 1837,
            "end": 1843
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
                "start": 1848,
                "end": 1849
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1852,
                "end": 1853
              },
              "start": 1848,
              "end": 1853
            },
            "directive": null,
            "start": 1848,
            "end": 1854
          }
        ],
        "start": 1831,
        "end": 1866
      },
      "expression": false,
      "start": 1765,
      "end": 1866
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Item",
        "optional": false,
        "typeAnnotation": null,
        "start": 1873,
        "end": 1877
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 1886,
              "end": 1890
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1892,
                "end": 1898
              },
              "start": 1890,
              "end": 1898
            },
            "accessibility": null,
            "static": false,
            "start": 1886,
            "end": 1899
          }
        ],
        "start": 1880,
        "end": 1901
      },
      "declare": false,
      "start": 1868,
      "end": 1901
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ItemMap",
        "optional": false,
        "typeAnnotation": null,
        "start": 1908,
        "end": 1915
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1928,
                    "end": 1934
                  },
                  "start": 1926,
                  "end": 1934
                },
                "start": 1925,
                "end": 1934
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Item",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1937,
                  "end": 1941
                },
                "typeArguments": null,
                "start": 1937,
                "end": 1941
              },
              "start": 1935,
              "end": 1941
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 1924,
            "end": 1942
          }
        ],
        "start": 1918,
        "end": 1944
      },
      "declare": false,
      "start": 1903,
      "end": 1944
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f50",
        "optional": false,
        "typeAnnotation": null,
        "start": 1955,
        "end": 1958
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1959,
              "end": 1960
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ItemMap",
                "optional": false,
                "typeAnnotation": null,
                "start": 1969,
                "end": 1976
              },
              "typeArguments": null,
              "start": 1969,
              "end": 1976
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1959,
            "end": 1976
          }
        ],
        "start": 1958,
        "end": 1977
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 1983,
                "end": 1984
              },
              "typeArguments": null,
              "start": 1983,
              "end": 1984
            },
            "start": 1981,
            "end": 1984
          },
          "start": 1978,
          "end": 1984
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1997,
                  "end": 1998
                },
                "typeArguments": null,
                "start": 1997,
                "end": 1998
              },
              "start": 1991,
              "end": 1998
            },
            "start": 1989,
            "end": 1998
          },
          "start": 1986,
          "end": 1998
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "item",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Item",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2016,
                        "end": 2020
                      },
                      "typeArguments": null,
                      "start": 2016,
                      "end": 2020
                    },
                    "start": 2014,
                    "end": 2020
                  },
                  "start": 2010,
                  "end": 2020
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2023,
                    "end": 2026
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2027,
                    "end": 2030
                  },
                  "optional": false,
                  "computed": true,
                  "start": 2023,
                  "end": 2031
                },
                "definite": false,
                "start": 2010,
                "end": 2031
              }
            ],
            "declare": false,
            "start": 2006,
            "end": 2032
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2044,
                  "end": 2047
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "key",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2048,
                  "end": 2051
                },
                "optional": false,
                "computed": true,
                "start": 2044,
                "end": 2052
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null,
                "start": 2053,
                "end": 2057
              },
              "optional": false,
              "computed": false,
              "start": 2044,
              "end": 2057
            },
            "start": 2037,
            "end": 2058
          }
        ],
        "start": 2000,
        "end": 2060
      },
      "expression": false,
      "start": 1946,
      "end": 2060
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f51",
        "optional": false,
        "typeAnnotation": null,
        "start": 2071,
        "end": 2074
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 2075,
              "end": 2076
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ItemMap",
                "optional": false,
                "typeAnnotation": null,
                "start": 2085,
                "end": 2092
              },
              "typeArguments": null,
              "start": 2085,
              "end": 2092
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2075,
            "end": 2092
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 2094,
              "end": 2095
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2110,
                  "end": 2111
                },
                "typeArguments": null,
                "start": 2110,
                "end": 2111
              },
              "start": 2104,
              "end": 2111
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2094,
            "end": 2111
          }
        ],
        "start": 2074,
        "end": 2112
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 2118,
                "end": 2119
              },
              "typeArguments": null,
              "start": 2118,
              "end": 2119
            },
            "start": 2116,
            "end": 2119
          },
          "start": 2113,
          "end": 2119
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 2126,
                "end": 2127
              },
              "typeArguments": null,
              "start": 2126,
              "end": 2127
            },
            "start": 2124,
            "end": 2127
          },
          "start": 2121,
          "end": 2127
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "item",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Item",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2145,
                        "end": 2149
                      },
                      "typeArguments": null,
                      "start": 2145,
                      "end": 2149
                    },
                    "start": 2143,
                    "end": 2149
                  },
                  "start": 2139,
                  "end": 2149
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2152,
                    "end": 2155
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2156,
                    "end": 2159
                  },
                  "optional": false,
                  "computed": true,
                  "start": 2152,
                  "end": 2160
                },
                "definite": false,
                "start": 2139,
                "end": 2160
              }
            ],
            "declare": false,
            "start": 2135,
            "end": 2161
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2173,
                  "end": 2176
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "key",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2177,
                  "end": 2180
                },
                "optional": false,
                "computed": true,
                "start": 2173,
                "end": 2181
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null,
                "start": 2182,
                "end": 2186
              },
              "optional": false,
              "computed": false,
              "start": 2173,
              "end": 2186
            },
            "start": 2166,
            "end": 2187
          }
        ],
        "start": 2129,
        "end": 2189
      },
      "expression": false,
      "start": 2062,
      "end": 2189
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T1",
        "optional": false,
        "typeAnnotation": null,
        "start": 2196,
        "end": 2198
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 2199,
              "end": 2200
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2199,
            "end": 2200
          }
        ],
        "start": 2198,
        "end": 2201
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 2211,
          "end": 2212
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 2222,
              "end": 2223
            },
            "typeArguments": null,
            "start": 2222,
            "end": 2223
          },
          "start": 2216,
          "end": 2223
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 2226,
              "end": 2227
            },
            "typeArguments": null,
            "start": 2226,
            "end": 2227
          },
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 2228,
              "end": 2229
            },
            "typeArguments": null,
            "start": 2228,
            "end": 2229
          },
          "start": 2226,
          "end": 2230
        },
        "optional": false,
        "readonly": null,
        "start": 2204,
        "end": 2233
      },
      "declare": false,
      "start": 2191,
      "end": 2233
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T2",
        "optional": false,
        "typeAnnotation": null,
        "start": 2240,
        "end": 2242
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 2243,
              "end": 2244
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2243,
            "end": 2244
          }
        ],
        "start": 2242,
        "end": 2245
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 2255,
          "end": 2256
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 2266,
              "end": 2267
            },
            "typeArguments": null,
            "start": 2266,
            "end": 2267
          },
          "start": 2260,
          "end": 2267
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 2270,
              "end": 2271
            },
            "typeArguments": null,
            "start": 2270,
            "end": 2271
          },
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 2272,
              "end": 2273
            },
            "typeArguments": null,
            "start": 2272,
            "end": 2273
          },
          "start": 2270,
          "end": 2274
        },
        "optional": false,
        "readonly": null,
        "start": 2248,
        "end": 2277
      },
      "declare": false,
      "start": 2235,
      "end": 2277
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f60",
        "optional": false,
        "typeAnnotation": null,
        "start": 2288,
        "end": 2291
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 2292,
              "end": 2293
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2292,
            "end": 2293
          }
        ],
        "start": 2291,
        "end": 2294
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T1",
                "optional": false,
                "typeAnnotation": null,
                "start": 2298,
                "end": 2300
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2301,
                      "end": 2302
                    },
                    "typeArguments": null,
                    "start": 2301,
                    "end": 2302
                  }
                ],
                "start": 2300,
                "end": 2303
              },
              "start": 2298,
              "end": 2303
            },
            "start": 2296,
            "end": 2303
          },
          "start": 2295,
          "end": 2303
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T2",
                "optional": false,
                "typeAnnotation": null,
                "start": 2308,
                "end": 2310
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2311,
                      "end": 2312
                    },
                    "typeArguments": null,
                    "start": 2311,
                    "end": 2312
                  }
                ],
                "start": 2310,
                "end": 2313
              },
              "start": 2308,
              "end": 2313
            },
            "start": 2306,
            "end": 2313
          },
          "start": 2305,
          "end": 2313
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
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
                "start": 2321,
                "end": 2322
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 2325,
                "end": 2326
              },
              "start": 2321,
              "end": 2326
            },
            "directive": null,
            "start": 2321,
            "end": 2327
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
                "start": 2332,
                "end": 2333
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 2336,
                "end": 2337
              },
              "start": 2332,
              "end": 2337
            },
            "directive": null,
            "start": 2332,
            "end": 2338
          }
        ],
        "start": 2315,
        "end": 2340
      },
      "expression": false,
      "start": 2279,
      "end": 2340
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Identity",
        "optional": false,
        "typeAnnotation": null,
        "start": 2347,
        "end": 2355
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 2356,
              "end": 2357
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2356,
            "end": 2357
          }
        ],
        "start": 2355,
        "end": 2358
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 2368,
          "end": 2369
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 2379,
              "end": 2380
            },
            "typeArguments": null,
            "start": 2379,
            "end": 2380
          },
          "start": 2373,
          "end": 2380
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 2383,
              "end": 2384
            },
            "typeArguments": null,
            "start": 2383,
            "end": 2384
          },
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 2385,
              "end": 2386
            },
            "typeArguments": null,
            "start": 2385,
            "end": 2386
          },
          "start": 2383,
          "end": 2387
        },
        "optional": false,
        "readonly": null,
        "start": 2361,
        "end": 2390
      },
      "declare": false,
      "start": 2342,
      "end": 2390
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f61",
        "optional": false,
        "typeAnnotation": null,
        "start": 2401,
        "end": 2404
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 2405,
              "end": 2406
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2405,
            "end": 2406
          }
        ],
        "start": 2404,
        "end": 2407
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Identity",
                "optional": false,
                "typeAnnotation": null,
                "start": 2411,
                "end": 2419
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2420,
                      "end": 2421
                    },
                    "typeArguments": null,
                    "start": 2420,
                    "end": 2421
                  }
                ],
                "start": 2419,
                "end": 2422
              },
              "start": 2411,
              "end": 2422
            },
            "start": 2409,
            "end": 2422
          },
          "start": 2408,
          "end": 2422
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Partial",
                "optional": false,
                "typeAnnotation": null,
                "start": 2427,
                "end": 2434
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2435,
                      "end": 2436
                    },
                    "typeArguments": null,
                    "start": 2435,
                    "end": 2436
                  }
                ],
                "start": 2434,
                "end": 2437
              },
              "start": 2427,
              "end": 2437
            },
            "start": 2425,
            "end": 2437
          },
          "start": 2424,
          "end": 2437
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
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
                "start": 2445,
                "end": 2446
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 2449,
                "end": 2450
              },
              "start": 2445,
              "end": 2450
            },
            "directive": null,
            "start": 2445,
            "end": 2451
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
                "start": 2466,
                "end": 2467
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 2470,
                "end": 2471
              },
              "start": 2466,
              "end": 2471
            },
            "directive": null,
            "start": 2466,
            "end": 2472
          }
        ],
        "start": 2439,
        "end": 2474
      },
      "expression": false,
      "start": 2392,
      "end": 2474
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f62",
        "optional": false,
        "typeAnnotation": null,
        "start": 2485,
        "end": 2488
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 2489,
              "end": 2490
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2489,
            "end": 2490
          }
        ],
        "start": 2488,
        "end": 2491
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Identity",
                "optional": false,
                "typeAnnotation": null,
                "start": 2495,
                "end": 2503
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2504,
                      "end": 2505
                    },
                    "typeArguments": null,
                    "start": 2504,
                    "end": 2505
                  }
                ],
                "start": 2503,
                "end": 2506
              },
              "start": 2495,
              "end": 2506
            },
            "start": 2493,
            "end": 2506
          },
          "start": 2492,
          "end": 2506
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Readonly",
                "optional": false,
                "typeAnnotation": null,
                "start": 2511,
                "end": 2519
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2520,
                      "end": 2521
                    },
                    "typeArguments": null,
                    "start": 2520,
                    "end": 2521
                  }
                ],
                "start": 2519,
                "end": 2522
              },
              "start": 2511,
              "end": 2522
            },
            "start": 2509,
            "end": 2522
          },
          "start": 2508,
          "end": 2522
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
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
                "start": 2530,
                "end": 2531
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 2534,
                "end": 2535
              },
              "start": 2530,
              "end": 2535
            },
            "directive": null,
            "start": 2530,
            "end": 2536
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
                "start": 2541,
                "end": 2542
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 2545,
                "end": 2546
              },
              "start": 2541,
              "end": 2546
            },
            "directive": null,
            "start": 2541,
            "end": 2547
          }
        ],
        "start": 2524,
        "end": 2549
      },
      "expression": false,
      "start": 2476,
      "end": 2549
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f70",
        "optional": false,
        "typeAnnotation": null,
        "start": 2560,
        "end": 2563
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 2564,
              "end": 2565
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2564,
            "end": 2565
          }
        ],
        "start": 2563,
        "end": 2566
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 2573,
                "end": 2574
              },
              "constraint": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2584,
                    "end": 2585
                  },
                  "typeArguments": null,
                  "start": 2584,
                  "end": 2585
                },
                "start": 2578,
                "end": 2585
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2588,
                    "end": 2589
                  },
                  "typeArguments": null,
                  "start": 2588,
                  "end": 2589
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2590,
                    "end": 2591
                  },
                  "typeArguments": null,
                  "start": 2590,
                  "end": 2591
                },
                "start": 2588,
                "end": 2592
              },
              "optional": false,
              "readonly": null,
              "start": 2570,
              "end": 2594
            },
            "start": 2568,
            "end": 2594
          },
          "start": 2567,
          "end": 2594
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 2602,
                "end": 2603
              },
              "constraint": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2613,
                    "end": 2614
                  },
                  "typeArguments": null,
                  "start": 2613,
                  "end": 2614
                },
                "start": 2607,
                "end": 2614
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2617,
                    "end": 2618
                  },
                  "typeArguments": null,
                  "start": 2617,
                  "end": 2618
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2619,
                    "end": 2620
                  },
                  "typeArguments": null,
                  "start": 2619,
                  "end": 2620
                },
                "start": 2617,
                "end": 2621
              },
              "optional": false,
              "readonly": null,
              "start": 2599,
              "end": 2623
            },
            "start": 2597,
            "end": 2623
          },
          "start": 2596,
          "end": 2623
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
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
                "start": 2631,
                "end": 2632
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 2635,
                "end": 2636
              },
              "start": 2631,
              "end": 2636
            },
            "directive": null,
            "start": 2631,
            "end": 2637
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
                "start": 2642,
                "end": 2643
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 2646,
                "end": 2647
              },
              "start": 2642,
              "end": 2647
            },
            "directive": null,
            "start": 2642,
            "end": 2648
          }
        ],
        "start": 2625,
        "end": 2650
      },
      "expression": false,
      "start": 2551,
      "end": 2650
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f71",
        "optional": false,
        "typeAnnotation": null,
        "start": 2661,
        "end": 2664
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 2665,
              "end": 2666
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2665,
            "end": 2666
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 2668,
              "end": 2669
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 2678,
                "end": 2679
              },
              "typeArguments": null,
              "start": 2678,
              "end": 2679
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2668,
            "end": 2679
          }
        ],
        "start": 2664,
        "end": 2680
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 2687,
                "end": 2688
              },
              "constraint": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2698,
                    "end": 2699
                  },
                  "typeArguments": null,
                  "start": 2698,
                  "end": 2699
                },
                "start": 2692,
                "end": 2699
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2702,
                    "end": 2703
                  },
                  "typeArguments": null,
                  "start": 2702,
                  "end": 2703
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2704,
                    "end": 2705
                  },
                  "typeArguments": null,
                  "start": 2704,
                  "end": 2705
                },
                "start": 2702,
                "end": 2706
              },
              "optional": false,
              "readonly": null,
              "start": 2684,
              "end": 2708
            },
            "start": 2682,
            "end": 2708
          },
          "start": 2681,
          "end": 2708
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 2716,
                "end": 2717
              },
              "constraint": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2727,
                    "end": 2728
                  },
                  "typeArguments": null,
                  "start": 2727,
                  "end": 2728
                },
                "start": 2721,
                "end": 2728
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2731,
                    "end": 2732
                  },
                  "typeArguments": null,
                  "start": 2731,
                  "end": 2732
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2733,
                    "end": 2734
                  },
                  "typeArguments": null,
                  "start": 2733,
                  "end": 2734
                },
                "start": 2731,
                "end": 2735
              },
              "optional": false,
              "readonly": null,
              "start": 2713,
              "end": 2737
            },
            "start": 2711,
            "end": 2737
          },
          "start": 2710,
          "end": 2737
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
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
                "start": 2745,
                "end": 2746
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 2749,
                "end": 2750
              },
              "start": 2745,
              "end": 2750
            },
            "directive": null,
            "start": 2745,
            "end": 2751
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
                "start": 2756,
                "end": 2757
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 2760,
                "end": 2761
              },
              "start": 2756,
              "end": 2761
            },
            "directive": null,
            "start": 2756,
            "end": 2762
          }
        ],
        "start": 2739,
        "end": 2774
      },
      "expression": false,
      "start": 2652,
      "end": 2774
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f72",
        "optional": false,
        "typeAnnotation": null,
        "start": 2785,
        "end": 2788
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 2789,
              "end": 2790
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2789,
            "end": 2790
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 2792,
              "end": 2793
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 2802,
                "end": 2803
              },
              "typeArguments": null,
              "start": 2802,
              "end": 2803
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2792,
            "end": 2803
          }
        ],
        "start": 2788,
        "end": 2804
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 2811,
                "end": 2812
              },
              "constraint": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2822,
                    "end": 2823
                  },
                  "typeArguments": null,
                  "start": 2822,
                  "end": 2823
                },
                "start": 2816,
                "end": 2823
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2826,
                    "end": 2827
                  },
                  "typeArguments": null,
                  "start": 2826,
                  "end": 2827
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2828,
                    "end": 2829
                  },
                  "typeArguments": null,
                  "start": 2828,
                  "end": 2829
                },
                "start": 2826,
                "end": 2830
              },
              "optional": false,
              "readonly": null,
              "start": 2808,
              "end": 2832
            },
            "start": 2806,
            "end": 2832
          },
          "start": 2805,
          "end": 2832
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 2840,
                "end": 2841
              },
              "constraint": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2851,
                    "end": 2852
                  },
                  "typeArguments": null,
                  "start": 2851,
                  "end": 2852
                },
                "start": 2845,
                "end": 2852
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2855,
                    "end": 2856
                  },
                  "typeArguments": null,
                  "start": 2855,
                  "end": 2856
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2857,
                    "end": 2858
                  },
                  "typeArguments": null,
                  "start": 2857,
                  "end": 2858
                },
                "start": 2855,
                "end": 2859
              },
              "optional": false,
              "readonly": null,
              "start": 2837,
              "end": 2861
            },
            "start": 2835,
            "end": 2861
          },
          "start": 2834,
          "end": 2861
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
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
                "start": 2869,
                "end": 2870
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 2873,
                "end": 2874
              },
              "start": 2869,
              "end": 2874
            },
            "directive": null,
            "start": 2869,
            "end": 2875
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
                "start": 2880,
                "end": 2881
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 2884,
                "end": 2885
              },
              "start": 2880,
              "end": 2885
            },
            "directive": null,
            "start": 2880,
            "end": 2886
          }
        ],
        "start": 2863,
        "end": 2898
      },
      "expression": false,
      "start": 2776,
      "end": 2898
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f73",
        "optional": false,
        "typeAnnotation": null,
        "start": 2909,
        "end": 2912
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 2913,
              "end": 2914
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2913,
            "end": 2914
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 2916,
              "end": 2917
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2932,
                  "end": 2933
                },
                "typeArguments": null,
                "start": 2932,
                "end": 2933
              },
              "start": 2926,
              "end": 2933
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2916,
            "end": 2933
          }
        ],
        "start": 2912,
        "end": 2934
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 2941,
                "end": 2942
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2946,
                  "end": 2947
                },
                "typeArguments": null,
                "start": 2946,
                "end": 2947
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2950,
                    "end": 2951
                  },
                  "typeArguments": null,
                  "start": 2950,
                  "end": 2951
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2952,
                    "end": 2953
                  },
                  "typeArguments": null,
                  "start": 2952,
                  "end": 2953
                },
                "start": 2950,
                "end": 2954
              },
              "optional": false,
              "readonly": null,
              "start": 2938,
              "end": 2956
            },
            "start": 2936,
            "end": 2956
          },
          "start": 2935,
          "end": 2956
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 2964,
                "end": 2965
              },
              "constraint": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2975,
                    "end": 2976
                  },
                  "typeArguments": null,
                  "start": 2975,
                  "end": 2976
                },
                "start": 2969,
                "end": 2976
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2979,
                    "end": 2980
                  },
                  "typeArguments": null,
                  "start": 2979,
                  "end": 2980
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2981,
                    "end": 2982
                  },
                  "typeArguments": null,
                  "start": 2981,
                  "end": 2982
                },
                "start": 2979,
                "end": 2983
              },
              "optional": false,
              "readonly": null,
              "start": 2961,
              "end": 2985
            },
            "start": 2959,
            "end": 2985
          },
          "start": 2958,
          "end": 2985
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
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
                "start": 2993,
                "end": 2994
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 2997,
                "end": 2998
              },
              "start": 2993,
              "end": 2998
            },
            "directive": null,
            "start": 2993,
            "end": 2999
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
                "start": 3004,
                "end": 3005
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 3008,
                "end": 3009
              },
              "start": 3004,
              "end": 3009
            },
            "directive": null,
            "start": 3004,
            "end": 3010
          }
        ],
        "start": 2987,
        "end": 3022
      },
      "expression": false,
      "start": 2900,
      "end": 3022
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f74",
        "optional": false,
        "typeAnnotation": null,
        "start": 3033,
        "end": 3036
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 3037,
              "end": 3038
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3037,
            "end": 3038
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 3040,
              "end": 3041
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 3050,
                "end": 3051
              },
              "typeArguments": null,
              "start": 3050,
              "end": 3051
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3040,
            "end": 3051
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 3053,
              "end": 3054
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3069,
                  "end": 3070
                },
                "typeArguments": null,
                "start": 3069,
                "end": 3070
              },
              "start": 3063,
              "end": 3070
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3053,
            "end": 3070
          }
        ],
        "start": 3036,
        "end": 3071
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 3078,
                "end": 3079
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3083,
                  "end": 3084
                },
                "typeArguments": null,
                "start": 3083,
                "end": 3084
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3087,
                    "end": 3088
                  },
                  "typeArguments": null,
                  "start": 3087,
                  "end": 3088
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3089,
                    "end": 3090
                  },
                  "typeArguments": null,
                  "start": 3089,
                  "end": 3090
                },
                "start": 3087,
                "end": 3091
              },
              "optional": false,
              "readonly": null,
              "start": 3075,
              "end": 3093
            },
            "start": 3073,
            "end": 3093
          },
          "start": 3072,
          "end": 3093
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 3101,
                "end": 3102
              },
              "constraint": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3112,
                    "end": 3113
                  },
                  "typeArguments": null,
                  "start": 3112,
                  "end": 3113
                },
                "start": 3106,
                "end": 3113
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3116,
                    "end": 3117
                  },
                  "typeArguments": null,
                  "start": 3116,
                  "end": 3117
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3118,
                    "end": 3119
                  },
                  "typeArguments": null,
                  "start": 3118,
                  "end": 3119
                },
                "start": 3116,
                "end": 3120
              },
              "optional": false,
              "readonly": null,
              "start": 3098,
              "end": 3122
            },
            "start": 3096,
            "end": 3122
          },
          "start": 3095,
          "end": 3122
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
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
                "start": 3130,
                "end": 3131
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 3134,
                "end": 3135
              },
              "start": 3130,
              "end": 3135
            },
            "directive": null,
            "start": 3130,
            "end": 3136
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
                "start": 3141,
                "end": 3142
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 3145,
                "end": 3146
              },
              "start": 3141,
              "end": 3146
            },
            "directive": null,
            "start": 3141,
            "end": 3147
          }
        ],
        "start": 3124,
        "end": 3159
      },
      "expression": false,
      "start": 3024,
      "end": 3159
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f75",
        "optional": false,
        "typeAnnotation": null,
        "start": 3170,
        "end": 3173
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 3174,
              "end": 3175
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3174,
            "end": 3175
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 3177,
              "end": 3178
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 3187,
                "end": 3188
              },
              "typeArguments": null,
              "start": 3187,
              "end": 3188
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3177,
            "end": 3188
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 3190,
              "end": 3191
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3206,
                  "end": 3207
                },
                "typeArguments": null,
                "start": 3206,
                "end": 3207
              },
              "start": 3200,
              "end": 3207
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3190,
            "end": 3207
          }
        ],
        "start": 3173,
        "end": 3208
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 3215,
                "end": 3216
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3220,
                  "end": 3221
                },
                "typeArguments": null,
                "start": 3220,
                "end": 3221
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3224,
                    "end": 3225
                  },
                  "typeArguments": null,
                  "start": 3224,
                  "end": 3225
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3226,
                    "end": 3227
                  },
                  "typeArguments": null,
                  "start": 3226,
                  "end": 3227
                },
                "start": 3224,
                "end": 3228
              },
              "optional": false,
              "readonly": null,
              "start": 3212,
              "end": 3230
            },
            "start": 3210,
            "end": 3230
          },
          "start": 3209,
          "end": 3230
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 3238,
                "end": 3239
              },
              "constraint": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3249,
                    "end": 3250
                  },
                  "typeArguments": null,
                  "start": 3249,
                  "end": 3250
                },
                "start": 3243,
                "end": 3250
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3253,
                    "end": 3254
                  },
                  "typeArguments": null,
                  "start": 3253,
                  "end": 3254
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3255,
                    "end": 3256
                  },
                  "typeArguments": null,
                  "start": 3255,
                  "end": 3256
                },
                "start": 3253,
                "end": 3257
              },
              "optional": false,
              "readonly": null,
              "start": 3235,
              "end": 3259
            },
            "start": 3233,
            "end": 3259
          },
          "start": 3232,
          "end": 3259
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
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
                "start": 3267,
                "end": 3268
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 3271,
                "end": 3272
              },
              "start": 3267,
              "end": 3272
            },
            "directive": null,
            "start": 3267,
            "end": 3273
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
                "start": 3278,
                "end": 3279
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 3282,
                "end": 3283
              },
              "start": 3278,
              "end": 3283
            },
            "directive": null,
            "start": 3278,
            "end": 3284
          }
        ],
        "start": 3261,
        "end": 3296
      },
      "expression": false,
      "start": 3161,
      "end": 3296
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f76",
        "optional": false,
        "typeAnnotation": null,
        "start": 3307,
        "end": 3310
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 3311,
              "end": 3312
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3311,
            "end": 3312
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 3314,
              "end": 3315
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 3324,
                "end": 3325
              },
              "typeArguments": null,
              "start": 3324,
              "end": 3325
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3314,
            "end": 3325
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 3327,
              "end": 3328
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3343,
                  "end": 3344
                },
                "typeArguments": null,
                "start": 3343,
                "end": 3344
              },
              "start": 3337,
              "end": 3344
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3327,
            "end": 3344
          }
        ],
        "start": 3310,
        "end": 3345
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 3352,
                "end": 3353
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3357,
                  "end": 3358
                },
                "typeArguments": null,
                "start": 3357,
                "end": 3358
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3361,
                    "end": 3362
                  },
                  "typeArguments": null,
                  "start": 3361,
                  "end": 3362
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3363,
                    "end": 3364
                  },
                  "typeArguments": null,
                  "start": 3363,
                  "end": 3364
                },
                "start": 3361,
                "end": 3365
              },
              "optional": false,
              "readonly": null,
              "start": 3349,
              "end": 3367
            },
            "start": 3347,
            "end": 3367
          },
          "start": 3346,
          "end": 3367
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 3375,
                "end": 3376
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3380,
                  "end": 3381
                },
                "typeArguments": null,
                "start": 3380,
                "end": 3381
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3384,
                    "end": 3385
                  },
                  "typeArguments": null,
                  "start": 3384,
                  "end": 3385
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3386,
                    "end": 3387
                  },
                  "typeArguments": null,
                  "start": 3386,
                  "end": 3387
                },
                "start": 3384,
                "end": 3388
              },
              "optional": false,
              "readonly": null,
              "start": 3372,
              "end": 3390
            },
            "start": 3370,
            "end": 3390
          },
          "start": 3369,
          "end": 3390
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
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
                "start": 3398,
                "end": 3399
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 3402,
                "end": 3403
              },
              "start": 3398,
              "end": 3403
            },
            "directive": null,
            "start": 3398,
            "end": 3404
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
                "start": 3409,
                "end": 3410
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 3413,
                "end": 3414
              },
              "start": 3409,
              "end": 3414
            },
            "directive": null,
            "start": 3409,
            "end": 3415
          }
        ],
        "start": 3392,
        "end": 3427
      },
      "expression": false,
      "start": 3298,
      "end": 3427
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f80",
        "optional": false,
        "typeAnnotation": null,
        "start": 3438,
        "end": 3441
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 3442,
              "end": 3443
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3442,
            "end": 3443
          }
        ],
        "start": 3441,
        "end": 3444
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 3448,
                "end": 3449
              },
              "typeArguments": null,
              "start": 3448,
              "end": 3449
            },
            "start": 3446,
            "end": 3449
          },
          "start": 3445,
          "end": 3449
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Partial",
            "optional": false,
            "typeAnnotation": null,
            "start": 3452,
            "end": 3459
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3460,
                  "end": 3461
                },
                "typeArguments": null,
                "start": 3460,
                "end": 3461
              }
            ],
            "start": 3459,
            "end": 3462
          },
          "start": 3452,
          "end": 3462
        },
        "start": 3450,
        "end": 3462
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "t",
              "optional": false,
              "typeAnnotation": null,
              "start": 3476,
              "end": 3477
            },
            "start": 3469,
            "end": 3478
          }
        ],
        "start": 3463,
        "end": 3480
      },
      "expression": false,
      "start": 3429,
      "end": 3480
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f81",
        "optional": false,
        "typeAnnotation": null,
        "start": 3491,
        "end": 3494
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 3495,
              "end": 3496
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3495,
            "end": 3496
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 3498,
              "end": 3499
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3514,
                  "end": 3515
                },
                "typeArguments": null,
                "start": 3514,
                "end": 3515
              },
              "start": 3508,
              "end": 3515
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3498,
            "end": 3515
          }
        ],
        "start": 3494,
        "end": 3516
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 3520,
                "end": 3521
              },
              "typeArguments": null,
              "start": 3520,
              "end": 3521
            },
            "start": 3518,
            "end": 3521
          },
          "start": 3517,
          "end": 3521
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 3526,
                "end": 3527
              },
              "typeArguments": null,
              "start": 3526,
              "end": 3527
            },
            "start": 3524,
            "end": 3527
          },
          "start": 3523,
          "end": 3527
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Partial",
            "optional": false,
            "typeAnnotation": null,
            "start": 3530,
            "end": 3537
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3538,
                    "end": 3539
                  },
                  "typeArguments": null,
                  "start": 3538,
                  "end": 3539
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3540,
                    "end": 3541
                  },
                  "typeArguments": null,
                  "start": 3540,
                  "end": 3541
                },
                "start": 3538,
                "end": 3542
              }
            ],
            "start": 3537,
            "end": 3543
          },
          "start": 3530,
          "end": 3543
        },
        "start": 3528,
        "end": 3543
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null,
                "start": 3557,
                "end": 3558
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "k",
                "optional": false,
                "typeAnnotation": null,
                "start": 3559,
                "end": 3560
              },
              "optional": false,
              "computed": true,
              "start": 3557,
              "end": 3561
            },
            "start": 3550,
            "end": 3562
          }
        ],
        "start": 3544,
        "end": 3564
      },
      "expression": false,
      "start": 3482,
      "end": 3564
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f82",
        "optional": false,
        "typeAnnotation": null,
        "start": 3575,
        "end": 3578
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 3579,
              "end": 3580
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3579,
            "end": 3580
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K1",
              "optional": false,
              "typeAnnotation": null,
              "start": 3582,
              "end": 3584
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3599,
                  "end": 3600
                },
                "typeArguments": null,
                "start": 3599,
                "end": 3600
              },
              "start": 3593,
              "end": 3600
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3582,
            "end": 3600
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K2",
              "optional": false,
              "typeAnnotation": null,
              "start": 3602,
              "end": 3604
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3619,
                    "end": 3620
                  },
                  "typeArguments": null,
                  "start": 3619,
                  "end": 3620
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3621,
                    "end": 3623
                  },
                  "typeArguments": null,
                  "start": 3621,
                  "end": 3623
                },
                "start": 3619,
                "end": 3624
              },
              "start": 3613,
              "end": 3624
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3602,
            "end": 3624
          }
        ],
        "start": 3578,
        "end": 3625
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 3629,
                "end": 3630
              },
              "typeArguments": null,
              "start": 3629,
              "end": 3630
            },
            "start": 3627,
            "end": 3630
          },
          "start": 3626,
          "end": 3630
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "k1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K1",
                "optional": false,
                "typeAnnotation": null,
                "start": 3636,
                "end": 3638
              },
              "typeArguments": null,
              "start": 3636,
              "end": 3638
            },
            "start": 3634,
            "end": 3638
          },
          "start": 3632,
          "end": 3638
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "k2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3644,
                "end": 3646
              },
              "typeArguments": null,
              "start": 3644,
              "end": 3646
            },
            "start": 3642,
            "end": 3646
          },
          "start": 3640,
          "end": 3646
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Partial",
            "optional": false,
            "typeAnnotation": null,
            "start": 3649,
            "end": 3656
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSIndexedAccessType",
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3657,
                      "end": 3658
                    },
                    "typeArguments": null,
                    "start": 3657,
                    "end": 3658
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3659,
                      "end": 3661
                    },
                    "typeArguments": null,
                    "start": 3659,
                    "end": 3661
                  },
                  "start": 3657,
                  "end": 3662
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3663,
                    "end": 3665
                  },
                  "typeArguments": null,
                  "start": 3663,
                  "end": 3665
                },
                "start": 3657,
                "end": 3666
              }
            ],
            "start": 3656,
            "end": 3667
          },
          "start": 3649,
          "end": 3667
        },
        "start": 3647,
        "end": 3667
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3681,
                  "end": 3682
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3683,
                  "end": 3685
                },
                "optional": false,
                "computed": true,
                "start": 3681,
                "end": 3686
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "k2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3687,
                "end": 3689
              },
              "optional": false,
              "computed": true,
              "start": 3681,
              "end": 3690
            },
            "start": 3674,
            "end": 3691
          }
        ],
        "start": 3668,
        "end": 3693
      },
      "expression": false,
      "start": 3566,
      "end": 3693
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Numeric",
        "optional": false,
        "typeAnnotation": null,
        "start": 3710,
        "end": 3717
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 3718,
              "end": 3719
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3718,
            "end": 3719
          }
        ],
        "start": 3717,
        "end": 3720
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 3726,
          "end": 3727
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 3737,
              "end": 3738
            },
            "typeArguments": null,
            "start": 3737,
            "end": 3738
          },
          "start": 3731,
          "end": 3738
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 3742,
          "end": 3748
        },
        "optional": true,
        "readonly": null,
        "start": 3723,
        "end": 3750
      },
      "declare": false,
      "start": 3705,
      "end": 3751
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f90",
        "optional": false,
        "typeAnnotation": null,
        "start": 3761,
        "end": 3764
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 3765,
              "end": 3766
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3777,
                    "end": 3778
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 3780,
                      "end": 3786
                    },
                    "start": 3778,
                    "end": 3786
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3777,
                  "end": 3786
                }
              ],
              "start": 3775,
              "end": 3788
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3765,
            "end": 3788
          }
        ],
        "start": 3764,
        "end": 3789
      },
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Numeric",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3807,
                        "end": 3814
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3815,
                              "end": 3816
                            },
                            "typeArguments": null,
                            "start": 3815,
                            "end": 3816
                          }
                        ],
                        "start": 3814,
                        "end": 3817
                      },
                      "start": 3807,
                      "end": 3817
                    },
                    "start": 3805,
                    "end": 3817
                  },
                  "start": 3804,
                  "end": 3817
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3822,
                        "end": 3823
                      },
                      "value": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 3825,
                        "end": 3826
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 3822,
                      "end": 3826
                    }
                  ],
                  "start": 3820,
                  "end": 3828
                },
                "definite": false,
                "start": 3804,
                "end": 3828
              }
            ],
            "declare": false,
            "start": 3798,
            "end": 3829
          }
        ],
        "start": 3792,
        "end": 3831
      },
      "expression": false,
      "start": 3752,
      "end": 3831
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 3842,
        "end": 3843
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 3844,
              "end": 3845
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3856,
                    "end": 3857
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [],
                      "start": 3859,
                      "end": 3861
                    },
                    "start": 3857,
                    "end": 3861
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3856,
                  "end": 3861
                }
              ],
              "start": 3854,
              "end": 3863
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3844,
            "end": 3863
          }
        ],
        "start": 3843,
        "end": 3864
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Partial",
            "optional": false,
            "typeAnnotation": null,
            "start": 3868,
            "end": 3875
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3876,
                  "end": 3877
                },
                "typeArguments": null,
                "start": 3876,
                "end": 3877
              }
            ],
            "start": 3875,
            "end": 3878
          },
          "start": 3868,
          "end": 3878
        },
        "start": 3866,
        "end": 3878
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "TSAsExpression",
              "expression": {
                "type": "TSNonNullExpression",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3892,
                  "end": 3901
                },
                "start": 3892,
                "end": 3902
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3906,
                  "end": 3907
                },
                "typeArguments": null,
                "start": 3906,
                "end": 3907
              },
              "start": 3892,
              "end": 3907
            },
            "start": 3885,
            "end": 3908
          }
        ],
        "start": 3879,
        "end": 3910
      },
      "expression": false,
      "start": 3833,
      "end": 3910
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SettingsTypes",
        "optional": false,
        "typeAnnotation": null,
        "start": 3932,
        "end": 3945
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "audio",
              "optional": false,
              "typeAnnotation": null,
              "start": 3950,
              "end": 3955
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "volume",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3963,
                      "end": 3969
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 3971,
                        "end": 3977
                      },
                      "start": 3969,
                      "end": 3977
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 3963,
                    "end": 3978
                  }
                ],
                "start": 3957,
                "end": 3982
              },
              "start": 3955,
              "end": 3982
            },
            "accessibility": null,
            "static": false,
            "start": 3950,
            "end": 3983
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "video",
              "optional": false,
              "typeAnnotation": null,
              "start": 3986,
              "end": 3991
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "resolution",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3999,
                      "end": 4009
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 4011,
                        "end": 4017
                      },
                      "start": 4009,
                      "end": 4017
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 3999,
                    "end": 4018
                  }
                ],
                "start": 3993,
                "end": 4022
              },
              "start": 3991,
              "end": 4022
            },
            "accessibility": null,
            "static": false,
            "start": 3986,
            "end": 4023
          }
        ],
        "start": 3946,
        "end": 4025
      },
      "declare": false,
      "start": 3922,
      "end": 4025
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Settings",
        "optional": false,
        "typeAnnotation": null,
        "start": 4036,
        "end": 4044
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Params",
              "optional": false,
              "typeAnnotation": null,
              "start": 4045,
              "end": 4051
            },
            "constraint": {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 4063,
                "end": 4064
              },
              "constraint": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Params",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4074,
                    "end": 4080
                  },
                  "typeArguments": null,
                  "start": 4074,
                  "end": 4080
                },
                "start": 4068,
                "end": 4080
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 4084,
                "end": 4090
              },
              "optional": true,
              "readonly": null,
              "start": 4060,
              "end": 4092
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4045,
            "end": 4092
          }
        ],
        "start": 4044,
        "end": 4093
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "config",
              "optional": false,
              "typeAnnotation": null,
              "start": 4098,
              "end": 4104
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Params",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4106,
                  "end": 4112
                },
                "typeArguments": null,
                "start": 4106,
                "end": 4112
              },
              "start": 4104,
              "end": 4112
            },
            "accessibility": null,
            "static": false,
            "start": 4098,
            "end": 4113
          }
        ],
        "start": 4094,
        "end": 4115
      },
      "declare": false,
      "start": 4026,
      "end": 4115
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ConcreteSettingsResult1",
        "optional": false,
        "typeAnnotation": null,
        "start": 4121,
        "end": 4144
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Settings",
          "optional": false,
          "typeAnnotation": null,
          "start": 4147,
          "end": 4155
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "SettingsTypes",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4156,
                  "end": 4169
                },
                "typeArguments": null,
                "start": 4156,
                "end": 4169
              },
              "indexType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "audio",
                  "raw": "\"audio\"",
                  "start": 4170,
                  "end": 4177
                },
                "start": 4170,
                "end": 4177
              },
              "start": 4156,
              "end": 4178
            }
          ],
          "start": 4155,
          "end": 4179
        },
        "start": 4147,
        "end": 4179
      },
      "declare": false,
      "start": 4116,
      "end": 4180
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ConcreteSettingsResult2",
        "optional": false,
        "typeAnnotation": null,
        "start": 4186,
        "end": 4209
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Settings",
          "optional": false,
          "typeAnnotation": null,
          "start": 4212,
          "end": 4220
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "SettingsTypes",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4221,
                  "end": 4234
                },
                "typeArguments": null,
                "start": 4221,
                "end": 4234
              },
              "indexType": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "audio",
                      "raw": "\"audio\"",
                      "start": 4235,
                      "end": 4242
                    },
                    "start": 4235,
                    "end": 4242
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "video",
                      "raw": "\"video\"",
                      "start": 4245,
                      "end": 4252
                    },
                    "start": 4245,
                    "end": 4252
                  }
                ],
                "start": 4235,
                "end": 4252
              },
              "start": 4221,
              "end": 4253
            }
          ],
          "start": 4220,
          "end": 4254
        },
        "start": 4212,
        "end": 4254
      },
      "declare": false,
      "start": 4181,
      "end": 4255
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GenericSettingsAccess",
        "optional": false,
        "typeAnnotation": null,
        "start": 4261,
        "end": 4282
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 4283,
              "end": 4284
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "SettingsTypes",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4299,
                  "end": 4312
                },
                "typeArguments": null,
                "start": 4299,
                "end": 4312
              },
              "start": 4293,
              "end": 4312
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4283,
            "end": 4312
          }
        ],
        "start": 4282,
        "end": 4313
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Settings",
          "optional": false,
          "typeAnnotation": null,
          "start": 4316,
          "end": 4324
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "SettingsTypes",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4325,
                  "end": 4338
                },
                "typeArguments": null,
                "start": 4325,
                "end": 4338
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4339,
                  "end": 4340
                },
                "typeArguments": null,
                "start": 4339,
                "end": 4340
              },
              "start": 4325,
              "end": 4341
            }
          ],
          "start": 4324,
          "end": 4342
        },
        "start": 4316,
        "end": 4342
      },
      "declare": false,
      "start": 4256,
      "end": 4343
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GenericSettingsResult1",
        "optional": false,
        "typeAnnotation": null,
        "start": 4349,
        "end": 4371
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "GenericSettingsAccess",
          "optional": false,
          "typeAnnotation": null,
          "start": 4374,
          "end": 4395
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "audio",
                "raw": "\"audio\"",
                "start": 4396,
                "end": 4403
              },
              "start": 4396,
              "end": 4403
            }
          ],
          "start": 4395,
          "end": 4404
        },
        "start": 4374,
        "end": 4404
      },
      "declare": false,
      "start": 4344,
      "end": 4405
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GenericSettingsResult2",
        "optional": false,
        "typeAnnotation": null,
        "start": 4411,
        "end": 4433
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "GenericSettingsAccess",
          "optional": false,
          "typeAnnotation": null,
          "start": 4436,
          "end": 4457
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "audio",
                    "raw": "\"audio\"",
                    "start": 4458,
                    "end": 4465
                  },
                  "start": 4458,
                  "end": 4465
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "video",
                    "raw": "\"video\"",
                    "start": 4468,
                    "end": 4475
                  },
                  "start": 4468,
                  "end": 4475
                }
              ],
              "start": 4458,
              "end": 4475
            }
          ],
          "start": 4457,
          "end": 4476
        },
        "start": 4436,
        "end": 4476
      },
      "declare": false,
      "start": 4406,
      "end": 4477
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 4477
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
    "value": "f1",
    "start": 9,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 11,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 12,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 13,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 14,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 15,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 16,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 18,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 19,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 21,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 22,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 24,
    "end": 29
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 31,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 33,
    "end": 34
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 39,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 47,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 48,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 50,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 52,
    "end": 53
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 55,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 64,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 66,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 68,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 70,
    "end": 71
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 72,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 80,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 88,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 89,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 90,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 92,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 93,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 96,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 101,
    "end": 102
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 107,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 115,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 117,
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
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 123,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 132,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 134,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 136,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 138,
    "end": 139
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 140,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 148,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 150,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 151,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 152,
    "end": 153
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 155,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 158,
    "end": 159
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 160,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 161,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 164,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 166,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 172,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 173,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 175,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 181,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 182,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 183,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 186,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 188,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 189,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 190,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 192,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 199,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 200,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 201,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 203,
    "end": 204
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 205,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 206,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 207,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 209,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 221,
    "end": 222
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 224,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 233,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 235,
    "end": 236
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 236,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 237,
    "end": 238
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 239,
    "end": 240
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 241,
    "end": 248
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 249,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 250,
    "end": 251
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 252,
    "end": 253
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 254,
    "end": 261
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 262,
    "end": 267
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 268,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 269,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 270,
    "end": 271
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 271,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 272,
    "end": 273
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 274,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 275,
    "end": 276
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 277,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 278,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 280,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 281,
    "end": 282
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 283,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 284,
    "end": 285
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 286,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 287,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 289,
    "end": 290
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 295,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 296,
    "end": 297
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 297,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 298,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 300,
    "end": 301
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 302,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 303,
    "end": 304
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 304,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 305,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 306,
    "end": 307
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 312,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 313,
    "end": 314
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 314,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 315,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 317,
    "end": 318
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 319,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 320,
    "end": 321
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 321,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 322,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 323,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 335,
    "end": 336
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 338,
    "end": 346
  },
  {
    "type": "Identifier",
    "value": "f5",
    "start": 347,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 349,
    "end": 350
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 350,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 351,
    "end": 352
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 353,
    "end": 354
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 355,
    "end": 362
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 363,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 364,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 365,
    "end": 366
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 366,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 367,
    "end": 368
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 369,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 370,
    "end": 371
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 372,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 373,
    "end": 374
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 375,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 376,
    "end": 377
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 378,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 379,
    "end": 380
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 381,
    "end": 386
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 387,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 388,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 390,
    "end": 391
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 396,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 397,
    "end": 398
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 398,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 399,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 401,
    "end": 402
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 403,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 404,
    "end": 405
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 405,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 406,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 407,
    "end": 408
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 423,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 424,
    "end": 425
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 425,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 426,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 428,
    "end": 429
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 430,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 431,
    "end": 432
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 432,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 433,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 434,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 446,
    "end": 447
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 449,
    "end": 457
  },
  {
    "type": "Identifier",
    "value": "f6",
    "start": 458,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 460,
    "end": 461
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 461,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 462,
    "end": 463
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 464,
    "end": 465
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 466,
    "end": 473
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 474,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 475,
    "end": 476
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 477,
    "end": 478
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 479,
    "end": 486
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 487,
    "end": 492
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 493,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 494,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 495,
    "end": 496
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 496,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 497,
    "end": 498
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 499,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 500,
    "end": 501
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 502,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 503,
    "end": 504
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 505,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 506,
    "end": 507
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 508,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 509,
    "end": 510
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 511,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 512,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 514,
    "end": 515
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 520,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 521,
    "end": 522
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 522,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 523,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 525,
    "end": 526
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 527,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 528,
    "end": 529
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 529,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 530,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 531,
    "end": 532
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 547,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 548,
    "end": 549
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 549,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 550,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 552,
    "end": 553
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 554,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 555,
    "end": 556
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 556,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 557,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 558,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 570,
    "end": 571
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 573,
    "end": 581
  },
  {
    "type": "Identifier",
    "value": "f10",
    "start": 582,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 585,
    "end": 586
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 586,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 587,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 588,
    "end": 589
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 589,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 590,
    "end": 591
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 592,
    "end": 593
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 593,
    "end": 594
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 595,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 596,
    "end": 597
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 598,
    "end": 605
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 605,
    "end": 606
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 606,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 607,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 608,
    "end": 609
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 610,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 611,
    "end": 612
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 613,
    "end": 618
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 619,
    "end": 620
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 620,
    "end": 621
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 622,
    "end": 623
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 628,
    "end": 629
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 629,
    "end": 630
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 630,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 631,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 633,
    "end": 634
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 635,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 636,
    "end": 637
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 637,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 638,
    "end": 639
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 639,
    "end": 640
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 655,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 656,
    "end": 657
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 657,
    "end": 658
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 658,
    "end": 659
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 660,
    "end": 661
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 662,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 663,
    "end": 664
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 664,
    "end": 665
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 665,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 666,
    "end": 667
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 668,
    "end": 669
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 671,
    "end": 679
  },
  {
    "type": "Identifier",
    "value": "f11",
    "start": 680,
    "end": 683
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 683,
    "end": 684
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 684,
    "end": 685
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 685,
    "end": 686
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 687,
    "end": 688
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 689,
    "end": 696
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 697,
    "end": 702
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 703,
    "end": 704
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 704,
    "end": 705
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 705,
    "end": 706
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 706,
    "end": 707
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 707,
    "end": 708
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 709,
    "end": 710
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 710,
    "end": 711
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 712,
    "end": 713
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 713,
    "end": 714
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 715,
    "end": 722
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 722,
    "end": 723
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 723,
    "end": 724
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 724,
    "end": 725
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 725,
    "end": 726
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 727,
    "end": 728
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 728,
    "end": 729
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 730,
    "end": 731
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 731,
    "end": 732
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 733,
    "end": 734
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 739,
    "end": 740
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 740,
    "end": 741
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 741,
    "end": 742
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 742,
    "end": 743
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 744,
    "end": 745
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 746,
    "end": 747
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 747,
    "end": 748
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 748,
    "end": 749
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 749,
    "end": 750
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 750,
    "end": 751
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 766,
    "end": 767
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 767,
    "end": 768
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 768,
    "end": 769
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 769,
    "end": 770
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 771,
    "end": 772
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 773,
    "end": 774
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 774,
    "end": 775
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 775,
    "end": 776
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 776,
    "end": 777
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 777,
    "end": 778
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 779,
    "end": 780
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 782,
    "end": 790
  },
  {
    "type": "Identifier",
    "value": "f12",
    "start": 791,
    "end": 794
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 794,
    "end": 795
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 795,
    "end": 796
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 796,
    "end": 797
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 798,
    "end": 799
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 800,
    "end": 807
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 808,
    "end": 809
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 809,
    "end": 810
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 810,
    "end": 811
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 811,
    "end": 812
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 812,
    "end": 813
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 814,
    "end": 815
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 815,
    "end": 816
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 817,
    "end": 818
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 818,
    "end": 819
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 820,
    "end": 827
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 827,
    "end": 828
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 828,
    "end": 829
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 829,
    "end": 830
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 830,
    "end": 831
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 832,
    "end": 833
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 833,
    "end": 834
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 835,
    "end": 840
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 841,
    "end": 842
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 842,
    "end": 843
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 844,
    "end": 845
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 850,
    "end": 851
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 851,
    "end": 852
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 852,
    "end": 853
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 853,
    "end": 854
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 855,
    "end": 856
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 857,
    "end": 858
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 858,
    "end": 859
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 859,
    "end": 860
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 860,
    "end": 861
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 861,
    "end": 862
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 877,
    "end": 878
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 878,
    "end": 879
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 879,
    "end": 880
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 880,
    "end": 881
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 882,
    "end": 883
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 884,
    "end": 885
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 885,
    "end": 886
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 886,
    "end": 887
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 887,
    "end": 888
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 888,
    "end": 889
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 900,
    "end": 901
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 903,
    "end": 911
  },
  {
    "type": "Identifier",
    "value": "f13",
    "start": 912,
    "end": 915
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 915,
    "end": 916
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 916,
    "end": 917
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 917,
    "end": 918
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 919,
    "end": 920
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 921,
    "end": 928
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 929,
    "end": 930
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 930,
    "end": 931
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 932,
    "end": 933
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 934,
    "end": 941
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 942,
    "end": 947
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 948,
    "end": 949
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 949,
    "end": 950
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 950,
    "end": 951
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 951,
    "end": 952
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 952,
    "end": 953
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 954,
    "end": 955
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 955,
    "end": 956
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 957,
    "end": 958
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 958,
    "end": 959
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 960,
    "end": 967
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 967,
    "end": 968
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 968,
    "end": 969
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 969,
    "end": 970
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 970,
    "end": 971
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 972,
    "end": 973
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 973,
    "end": 974
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 975,
    "end": 976
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 976,
    "end": 977
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 978,
    "end": 979
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 984,
    "end": 985
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 985,
    "end": 986
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 986,
    "end": 987
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 987,
    "end": 988
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 989,
    "end": 990
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 991,
    "end": 992
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 992,
    "end": 993
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 993,
    "end": 994
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 994,
    "end": 995
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 995,
    "end": 996
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1011,
    "end": 1012
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1012,
    "end": 1013
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 1013,
    "end": 1014
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1014,
    "end": 1015
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1016,
    "end": 1017
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1018,
    "end": 1019
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1019,
    "end": 1020
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 1020,
    "end": 1021
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1021,
    "end": 1022
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1022,
    "end": 1023
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1034,
    "end": 1035
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1037,
    "end": 1045
  },
  {
    "type": "Identifier",
    "value": "f20",
    "start": 1046,
    "end": 1049
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1049,
    "end": 1050
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1050,
    "end": 1051
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1051,
    "end": 1052
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1052,
    "end": 1053
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1053,
    "end": 1054
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1054,
    "end": 1055
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1056,
    "end": 1057
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1057,
    "end": 1058
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1059,
    "end": 1060
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1060,
    "end": 1061
  },
  {
    "type": "Identifier",
    "value": "Readonly",
    "start": 1062,
    "end": 1070
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1070,
    "end": 1071
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1071,
    "end": 1072
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1072,
    "end": 1073
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1073,
    "end": 1074
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 1075,
    "end": 1076
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1076,
    "end": 1077
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1078,
    "end": 1083
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1084,
    "end": 1085
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1085,
    "end": 1086
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1087,
    "end": 1088
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1093,
    "end": 1094
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1094,
    "end": 1095
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 1095,
    "end": 1096
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1096,
    "end": 1097
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1098,
    "end": 1099
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1100,
    "end": 1101
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1101,
    "end": 1102
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 1102,
    "end": 1103
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1103,
    "end": 1104
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1104,
    "end": 1105
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1110,
    "end": 1111
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1111,
    "end": 1112
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 1112,
    "end": 1113
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1113,
    "end": 1114
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1115,
    "end": 1116
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1117,
    "end": 1118
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1118,
    "end": 1119
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 1119,
    "end": 1120
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1120,
    "end": 1121
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1121,
    "end": 1122
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1133,
    "end": 1134
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1136,
    "end": 1144
  },
  {
    "type": "Identifier",
    "value": "f21",
    "start": 1145,
    "end": 1148
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1148,
    "end": 1149
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1149,
    "end": 1150
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1150,
    "end": 1151
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1152,
    "end": 1153
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1154,
    "end": 1161
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1162,
    "end": 1167
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1168,
    "end": 1169
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1169,
    "end": 1170
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1170,
    "end": 1171
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1171,
    "end": 1172
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1172,
    "end": 1173
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1174,
    "end": 1175
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1175,
    "end": 1176
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1177,
    "end": 1178
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1178,
    "end": 1179
  },
  {
    "type": "Identifier",
    "value": "Readonly",
    "start": 1180,
    "end": 1188
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1188,
    "end": 1189
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1189,
    "end": 1190
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1190,
    "end": 1191
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1191,
    "end": 1192
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 1193,
    "end": 1194
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1194,
    "end": 1195
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1196,
    "end": 1197
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1197,
    "end": 1198
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1199,
    "end": 1200
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1205,
    "end": 1206
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1206,
    "end": 1207
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 1207,
    "end": 1208
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1208,
    "end": 1209
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1210,
    "end": 1211
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1212,
    "end": 1213
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1213,
    "end": 1214
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 1214,
    "end": 1215
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1215,
    "end": 1216
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1216,
    "end": 1217
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1222,
    "end": 1223
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1223,
    "end": 1224
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 1224,
    "end": 1225
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1225,
    "end": 1226
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1227,
    "end": 1228
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1229,
    "end": 1230
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1230,
    "end": 1231
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 1231,
    "end": 1232
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1232,
    "end": 1233
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1233,
    "end": 1234
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1245,
    "end": 1246
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1248,
    "end": 1256
  },
  {
    "type": "Identifier",
    "value": "f22",
    "start": 1257,
    "end": 1260
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1260,
    "end": 1261
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1261,
    "end": 1262
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1262,
    "end": 1263
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1264,
    "end": 1265
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1266,
    "end": 1273
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1274,
    "end": 1275
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1275,
    "end": 1276
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1276,
    "end": 1277
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1277,
    "end": 1278
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1278,
    "end": 1279
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1280,
    "end": 1281
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1281,
    "end": 1282
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1283,
    "end": 1284
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1284,
    "end": 1285
  },
  {
    "type": "Identifier",
    "value": "Readonly",
    "start": 1286,
    "end": 1294
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1294,
    "end": 1295
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1295,
    "end": 1296
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1296,
    "end": 1297
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1297,
    "end": 1298
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 1299,
    "end": 1300
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1300,
    "end": 1301
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1302,
    "end": 1307
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1308,
    "end": 1309
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1309,
    "end": 1310
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1311,
    "end": 1312
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1317,
    "end": 1318
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1318,
    "end": 1319
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 1319,
    "end": 1320
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1320,
    "end": 1321
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1322,
    "end": 1323
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1324,
    "end": 1325
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1325,
    "end": 1326
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 1326,
    "end": 1327
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1327,
    "end": 1328
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1328,
    "end": 1329
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1334,
    "end": 1335
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1335,
    "end": 1336
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 1336,
    "end": 1337
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1337,
    "end": 1338
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1339,
    "end": 1340
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1341,
    "end": 1342
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1342,
    "end": 1343
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 1343,
    "end": 1344
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1344,
    "end": 1345
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1345,
    "end": 1346
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1357,
    "end": 1358
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1360,
    "end": 1368
  },
  {
    "type": "Identifier",
    "value": "f23",
    "start": 1369,
    "end": 1372
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1372,
    "end": 1373
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1373,
    "end": 1374
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1374,
    "end": 1375
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1376,
    "end": 1377
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1378,
    "end": 1385
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1386,
    "end": 1387
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1387,
    "end": 1388
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1389,
    "end": 1390
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1391,
    "end": 1398
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1399,
    "end": 1404
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1405,
    "end": 1406
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1406,
    "end": 1407
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1407,
    "end": 1408
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1408,
    "end": 1409
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1409,
    "end": 1410
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1411,
    "end": 1412
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1412,
    "end": 1413
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1414,
    "end": 1415
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1415,
    "end": 1416
  },
  {
    "type": "Identifier",
    "value": "Readonly",
    "start": 1417,
    "end": 1425
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1425,
    "end": 1426
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1426,
    "end": 1427
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1427,
    "end": 1428
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1428,
    "end": 1429
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 1430,
    "end": 1431
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1431,
    "end": 1432
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1433,
    "end": 1434
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1434,
    "end": 1435
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1436,
    "end": 1437
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1442,
    "end": 1443
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1443,
    "end": 1444
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 1444,
    "end": 1445
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1445,
    "end": 1446
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1447,
    "end": 1448
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1449,
    "end": 1450
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1450,
    "end": 1451
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 1451,
    "end": 1452
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1452,
    "end": 1453
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1453,
    "end": 1454
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1459,
    "end": 1460
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1460,
    "end": 1461
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 1461,
    "end": 1462
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1462,
    "end": 1463
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1464,
    "end": 1465
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1466,
    "end": 1467
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1467,
    "end": 1468
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 1468,
    "end": 1469
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1469,
    "end": 1470
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1470,
    "end": 1471
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1482,
    "end": 1483
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1485,
    "end": 1489
  },
  {
    "type": "Identifier",
    "value": "Thing",
    "start": 1490,
    "end": 1495
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1496,
    "end": 1497
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1498,
    "end": 1499
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1500,
    "end": 1501
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1501,
    "end": 1502
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1503,
    "end": 1509
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1509,
    "end": 1510
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1511,
    "end": 1512
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1512,
    "end": 1513
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1514,
    "end": 1520
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1521,
    "end": 1522
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1522,
    "end": 1523
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1525,
    "end": 1533
  },
  {
    "type": "Identifier",
    "value": "f30",
    "start": 1534,
    "end": 1537
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1537,
    "end": 1538
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1538,
    "end": 1539
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1539,
    "end": 1540
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1540,
    "end": 1541
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1541,
    "end": 1542
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1542,
    "end": 1543
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1544,
    "end": 1545
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1545,
    "end": 1546
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1547,
    "end": 1548
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1548,
    "end": 1549
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 1550,
    "end": 1557
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1557,
    "end": 1558
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1558,
    "end": 1559
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1559,
    "end": 1560
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1560,
    "end": 1561
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1562,
    "end": 1563
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1568,
    "end": 1569
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1570,
    "end": 1571
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1572,
    "end": 1573
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1573,
    "end": 1574
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1589,
    "end": 1590
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1591,
    "end": 1592
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1593,
    "end": 1594
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1594,
    "end": 1595
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1596,
    "end": 1597
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1599,
    "end": 1607
  },
  {
    "type": "Identifier",
    "value": "f31",
    "start": 1608,
    "end": 1611
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1611,
    "end": 1612
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1612,
    "end": 1613
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1614,
    "end": 1621
  },
  {
    "type": "Identifier",
    "value": "Thing",
    "start": 1622,
    "end": 1627
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1627,
    "end": 1628
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1628,
    "end": 1629
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1629,
    "end": 1630
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1630,
    "end": 1631
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 1632,
    "end": 1639
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1639,
    "end": 1640
  },
  {
    "type": "Identifier",
    "value": "Thing",
    "start": 1640,
    "end": 1645
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1645,
    "end": 1646
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1646,
    "end": 1647
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1648,
    "end": 1649
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1649,
    "end": 1650
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 1651,
    "end": 1658
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1658,
    "end": 1659
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1659,
    "end": 1660
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1660,
    "end": 1661
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1661,
    "end": 1662
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1663,
    "end": 1664
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1669,
    "end": 1670
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1671,
    "end": 1672
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1673,
    "end": 1674
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1674,
    "end": 1675
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1680,
    "end": 1681
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1682,
    "end": 1683
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1684,
    "end": 1685
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1685,
    "end": 1686
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1697,
    "end": 1698
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1700,
    "end": 1708
  },
  {
    "type": "Identifier",
    "value": "f40",
    "start": 1709,
    "end": 1712
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1712,
    "end": 1713
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1713,
    "end": 1714
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1714,
    "end": 1715
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1715,
    "end": 1716
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1716,
    "end": 1717
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1717,
    "end": 1718
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1719,
    "end": 1720
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1720,
    "end": 1721
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1722,
    "end": 1723
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1723,
    "end": 1724
  },
  {
    "type": "Identifier",
    "value": "Readonly",
    "start": 1725,
    "end": 1733
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1733,
    "end": 1734
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1734,
    "end": 1735
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1735,
    "end": 1736
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1736,
    "end": 1737
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1738,
    "end": 1739
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1744,
    "end": 1745
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1746,
    "end": 1747
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1748,
    "end": 1749
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1749,
    "end": 1750
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1755,
    "end": 1756
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1757,
    "end": 1758
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1759,
    "end": 1760
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1760,
    "end": 1761
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1762,
    "end": 1763
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1765,
    "end": 1773
  },
  {
    "type": "Identifier",
    "value": "f41",
    "start": 1774,
    "end": 1777
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1777,
    "end": 1778
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1778,
    "end": 1779
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1780,
    "end": 1787
  },
  {
    "type": "Identifier",
    "value": "Thing",
    "start": 1788,
    "end": 1793
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1793,
    "end": 1794
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1794,
    "end": 1795
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1795,
    "end": 1796
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1796,
    "end": 1797
  },
  {
    "type": "Identifier",
    "value": "Readonly",
    "start": 1798,
    "end": 1806
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1806,
    "end": 1807
  },
  {
    "type": "Identifier",
    "value": "Thing",
    "start": 1807,
    "end": 1812
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1812,
    "end": 1813
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1813,
    "end": 1814
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1815,
    "end": 1816
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1816,
    "end": 1817
  },
  {
    "type": "Identifier",
    "value": "Readonly",
    "start": 1818,
    "end": 1826
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1826,
    "end": 1827
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1827,
    "end": 1828
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1828,
    "end": 1829
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1829,
    "end": 1830
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1831,
    "end": 1832
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1837,
    "end": 1838
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1839,
    "end": 1840
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1841,
    "end": 1842
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1842,
    "end": 1843
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1848,
    "end": 1849
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1850,
    "end": 1851
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1852,
    "end": 1853
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1853,
    "end": 1854
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1865,
    "end": 1866
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1868,
    "end": 1872
  },
  {
    "type": "Identifier",
    "value": "Item",
    "start": 1873,
    "end": 1877
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1878,
    "end": 1879
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1880,
    "end": 1881
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1886,
    "end": 1890
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1890,
    "end": 1891
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1892,
    "end": 1898
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1898,
    "end": 1899
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1900,
    "end": 1901
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1903,
    "end": 1907
  },
  {
    "type": "Identifier",
    "value": "ItemMap",
    "start": 1908,
    "end": 1915
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1916,
    "end": 1917
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1918,
    "end": 1919
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1924,
    "end": 1925
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1925,
    "end": 1926
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1926,
    "end": 1927
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1928,
    "end": 1934
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1934,
    "end": 1935
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1935,
    "end": 1936
  },
  {
    "type": "Identifier",
    "value": "Item",
    "start": 1937,
    "end": 1941
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1941,
    "end": 1942
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1943,
    "end": 1944
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1946,
    "end": 1954
  },
  {
    "type": "Identifier",
    "value": "f50",
    "start": 1955,
    "end": 1958
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1958,
    "end": 1959
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1959,
    "end": 1960
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1961,
    "end": 1968
  },
  {
    "type": "Identifier",
    "value": "ItemMap",
    "start": 1969,
    "end": 1976
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1976,
    "end": 1977
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1977,
    "end": 1978
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 1978,
    "end": 1981
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1981,
    "end": 1982
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1983,
    "end": 1984
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1984,
    "end": 1985
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1986,
    "end": 1989
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1989,
    "end": 1990
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1991,
    "end": 1996
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1997,
    "end": 1998
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1998,
    "end": 1999
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2000,
    "end": 2001
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2006,
    "end": 2009
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 2010,
    "end": 2014
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2014,
    "end": 2015
  },
  {
    "type": "Identifier",
    "value": "Item",
    "start": 2016,
    "end": 2020
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2021,
    "end": 2022
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 2023,
    "end": 2026
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2026,
    "end": 2027
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 2027,
    "end": 2030
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2030,
    "end": 2031
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2031,
    "end": 2032
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2037,
    "end": 2043
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 2044,
    "end": 2047
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2047,
    "end": 2048
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 2048,
    "end": 2051
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2051,
    "end": 2052
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2052,
    "end": 2053
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 2053,
    "end": 2057
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2057,
    "end": 2058
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2059,
    "end": 2060
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2062,
    "end": 2070
  },
  {
    "type": "Identifier",
    "value": "f51",
    "start": 2071,
    "end": 2074
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2074,
    "end": 2075
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2075,
    "end": 2076
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2077,
    "end": 2084
  },
  {
    "type": "Identifier",
    "value": "ItemMap",
    "start": 2085,
    "end": 2092
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2092,
    "end": 2093
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 2094,
    "end": 2095
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2096,
    "end": 2103
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 2104,
    "end": 2109
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2110,
    "end": 2111
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2111,
    "end": 2112
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2112,
    "end": 2113
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 2113,
    "end": 2116
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2116,
    "end": 2117
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2118,
    "end": 2119
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2119,
    "end": 2120
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 2121,
    "end": 2124
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2124,
    "end": 2125
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 2126,
    "end": 2127
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2127,
    "end": 2128
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2129,
    "end": 2130
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2135,
    "end": 2138
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 2139,
    "end": 2143
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2143,
    "end": 2144
  },
  {
    "type": "Identifier",
    "value": "Item",
    "start": 2145,
    "end": 2149
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2150,
    "end": 2151
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 2152,
    "end": 2155
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2155,
    "end": 2156
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 2156,
    "end": 2159
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2159,
    "end": 2160
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2160,
    "end": 2161
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2166,
    "end": 2172
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 2173,
    "end": 2176
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2176,
    "end": 2177
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 2177,
    "end": 2180
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2180,
    "end": 2181
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2181,
    "end": 2182
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 2182,
    "end": 2186
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2186,
    "end": 2187
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2188,
    "end": 2189
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2191,
    "end": 2195
  },
  {
    "type": "Identifier",
    "value": "T1",
    "start": 2196,
    "end": 2198
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2198,
    "end": 2199
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2199,
    "end": 2200
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2200,
    "end": 2201
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2202,
    "end": 2203
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2204,
    "end": 2205
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2210,
    "end": 2211
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 2211,
    "end": 2212
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 2213,
    "end": 2215
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 2216,
    "end": 2221
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2222,
    "end": 2223
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2223,
    "end": 2224
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2224,
    "end": 2225
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2226,
    "end": 2227
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2227,
    "end": 2228
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 2228,
    "end": 2229
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2229,
    "end": 2230
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2230,
    "end": 2231
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2232,
    "end": 2233
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2235,
    "end": 2239
  },
  {
    "type": "Identifier",
    "value": "T2",
    "start": 2240,
    "end": 2242
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2242,
    "end": 2243
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2243,
    "end": 2244
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2244,
    "end": 2245
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2246,
    "end": 2247
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2248,
    "end": 2249
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2254,
    "end": 2255
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 2255,
    "end": 2256
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 2257,
    "end": 2259
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 2260,
    "end": 2265
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2266,
    "end": 2267
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2267,
    "end": 2268
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2268,
    "end": 2269
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2270,
    "end": 2271
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2271,
    "end": 2272
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 2272,
    "end": 2273
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2273,
    "end": 2274
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2274,
    "end": 2275
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2276,
    "end": 2277
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2279,
    "end": 2287
  },
  {
    "type": "Identifier",
    "value": "f60",
    "start": 2288,
    "end": 2291
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2291,
    "end": 2292
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2292,
    "end": 2293
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2293,
    "end": 2294
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2294,
    "end": 2295
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2295,
    "end": 2296
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2296,
    "end": 2297
  },
  {
    "type": "Identifier",
    "value": "T1",
    "start": 2298,
    "end": 2300
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2300,
    "end": 2301
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2301,
    "end": 2302
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2302,
    "end": 2303
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2303,
    "end": 2304
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2305,
    "end": 2306
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2306,
    "end": 2307
  },
  {
    "type": "Identifier",
    "value": "T2",
    "start": 2308,
    "end": 2310
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2310,
    "end": 2311
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2311,
    "end": 2312
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2312,
    "end": 2313
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2313,
    "end": 2314
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2315,
    "end": 2316
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2321,
    "end": 2322
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2323,
    "end": 2324
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2325,
    "end": 2326
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2326,
    "end": 2327
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2332,
    "end": 2333
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2334,
    "end": 2335
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2336,
    "end": 2337
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2337,
    "end": 2338
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2339,
    "end": 2340
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2342,
    "end": 2346
  },
  {
    "type": "Identifier",
    "value": "Identity",
    "start": 2347,
    "end": 2355
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2355,
    "end": 2356
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2356,
    "end": 2357
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2357,
    "end": 2358
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2359,
    "end": 2360
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2361,
    "end": 2362
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2367,
    "end": 2368
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 2368,
    "end": 2369
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 2370,
    "end": 2372
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 2373,
    "end": 2378
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2379,
    "end": 2380
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2380,
    "end": 2381
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2381,
    "end": 2382
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2383,
    "end": 2384
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2384,
    "end": 2385
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 2385,
    "end": 2386
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2386,
    "end": 2387
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2387,
    "end": 2388
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2389,
    "end": 2390
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2392,
    "end": 2400
  },
  {
    "type": "Identifier",
    "value": "f61",
    "start": 2401,
    "end": 2404
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2404,
    "end": 2405
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2405,
    "end": 2406
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2406,
    "end": 2407
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2407,
    "end": 2408
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2408,
    "end": 2409
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2409,
    "end": 2410
  },
  {
    "type": "Identifier",
    "value": "Identity",
    "start": 2411,
    "end": 2419
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2419,
    "end": 2420
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2420,
    "end": 2421
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2421,
    "end": 2422
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2422,
    "end": 2423
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2424,
    "end": 2425
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2425,
    "end": 2426
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 2427,
    "end": 2434
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2434,
    "end": 2435
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2435,
    "end": 2436
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2436,
    "end": 2437
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2437,
    "end": 2438
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2439,
    "end": 2440
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2445,
    "end": 2446
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2447,
    "end": 2448
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2449,
    "end": 2450
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2450,
    "end": 2451
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2466,
    "end": 2467
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2468,
    "end": 2469
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2470,
    "end": 2471
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2471,
    "end": 2472
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2473,
    "end": 2474
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2476,
    "end": 2484
  },
  {
    "type": "Identifier",
    "value": "f62",
    "start": 2485,
    "end": 2488
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2488,
    "end": 2489
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2489,
    "end": 2490
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2490,
    "end": 2491
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2491,
    "end": 2492
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2492,
    "end": 2493
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2493,
    "end": 2494
  },
  {
    "type": "Identifier",
    "value": "Identity",
    "start": 2495,
    "end": 2503
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2503,
    "end": 2504
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2504,
    "end": 2505
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2505,
    "end": 2506
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2506,
    "end": 2507
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2508,
    "end": 2509
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2509,
    "end": 2510
  },
  {
    "type": "Identifier",
    "value": "Readonly",
    "start": 2511,
    "end": 2519
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2519,
    "end": 2520
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2520,
    "end": 2521
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2521,
    "end": 2522
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2522,
    "end": 2523
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2524,
    "end": 2525
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2530,
    "end": 2531
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2532,
    "end": 2533
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2534,
    "end": 2535
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2535,
    "end": 2536
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2541,
    "end": 2542
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2543,
    "end": 2544
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2545,
    "end": 2546
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2546,
    "end": 2547
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2548,
    "end": 2549
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2551,
    "end": 2559
  },
  {
    "type": "Identifier",
    "value": "f70",
    "start": 2560,
    "end": 2563
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2563,
    "end": 2564
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2564,
    "end": 2565
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2565,
    "end": 2566
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2566,
    "end": 2567
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2567,
    "end": 2568
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2568,
    "end": 2569
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2570,
    "end": 2571
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2572,
    "end": 2573
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 2573,
    "end": 2574
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 2575,
    "end": 2577
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 2578,
    "end": 2583
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2584,
    "end": 2585
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2585,
    "end": 2586
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2586,
    "end": 2587
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2588,
    "end": 2589
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2589,
    "end": 2590
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 2590,
    "end": 2591
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2591,
    "end": 2592
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2593,
    "end": 2594
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2594,
    "end": 2595
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2596,
    "end": 2597
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2597,
    "end": 2598
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2599,
    "end": 2600
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2601,
    "end": 2602
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 2602,
    "end": 2603
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 2604,
    "end": 2606
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 2607,
    "end": 2612
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2613,
    "end": 2614
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2614,
    "end": 2615
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2615,
    "end": 2616
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2617,
    "end": 2618
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2618,
    "end": 2619
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 2619,
    "end": 2620
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2620,
    "end": 2621
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2622,
    "end": 2623
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2623,
    "end": 2624
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2625,
    "end": 2626
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2631,
    "end": 2632
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2633,
    "end": 2634
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2635,
    "end": 2636
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2636,
    "end": 2637
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2642,
    "end": 2643
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2644,
    "end": 2645
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2646,
    "end": 2647
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2647,
    "end": 2648
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2649,
    "end": 2650
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2652,
    "end": 2660
  },
  {
    "type": "Identifier",
    "value": "f71",
    "start": 2661,
    "end": 2664
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2664,
    "end": 2665
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2665,
    "end": 2666
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2666,
    "end": 2667
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2668,
    "end": 2669
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2670,
    "end": 2677
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2678,
    "end": 2679
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2679,
    "end": 2680
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2680,
    "end": 2681
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2681,
    "end": 2682
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2682,
    "end": 2683
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2684,
    "end": 2685
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2686,
    "end": 2687
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 2687,
    "end": 2688
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 2689,
    "end": 2691
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 2692,
    "end": 2697
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2698,
    "end": 2699
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2699,
    "end": 2700
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2700,
    "end": 2701
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2702,
    "end": 2703
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2703,
    "end": 2704
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 2704,
    "end": 2705
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2705,
    "end": 2706
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2707,
    "end": 2708
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2708,
    "end": 2709
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2710,
    "end": 2711
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2711,
    "end": 2712
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2713,
    "end": 2714
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2715,
    "end": 2716
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 2716,
    "end": 2717
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 2718,
    "end": 2720
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 2721,
    "end": 2726
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2727,
    "end": 2728
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2728,
    "end": 2729
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2729,
    "end": 2730
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2731,
    "end": 2732
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2732,
    "end": 2733
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 2733,
    "end": 2734
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2734,
    "end": 2735
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2736,
    "end": 2737
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2737,
    "end": 2738
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2739,
    "end": 2740
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2745,
    "end": 2746
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2747,
    "end": 2748
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2749,
    "end": 2750
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2750,
    "end": 2751
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2756,
    "end": 2757
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2758,
    "end": 2759
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2760,
    "end": 2761
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2761,
    "end": 2762
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2773,
    "end": 2774
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2776,
    "end": 2784
  },
  {
    "type": "Identifier",
    "value": "f72",
    "start": 2785,
    "end": 2788
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2788,
    "end": 2789
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2789,
    "end": 2790
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2790,
    "end": 2791
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2792,
    "end": 2793
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2794,
    "end": 2801
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2802,
    "end": 2803
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2803,
    "end": 2804
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2804,
    "end": 2805
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2805,
    "end": 2806
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2806,
    "end": 2807
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2808,
    "end": 2809
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2810,
    "end": 2811
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 2811,
    "end": 2812
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 2813,
    "end": 2815
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 2816,
    "end": 2821
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2822,
    "end": 2823
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2823,
    "end": 2824
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2824,
    "end": 2825
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2826,
    "end": 2827
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2827,
    "end": 2828
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 2828,
    "end": 2829
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2829,
    "end": 2830
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2831,
    "end": 2832
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2832,
    "end": 2833
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2834,
    "end": 2835
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2835,
    "end": 2836
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2837,
    "end": 2838
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2839,
    "end": 2840
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 2840,
    "end": 2841
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 2842,
    "end": 2844
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 2845,
    "end": 2850
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2851,
    "end": 2852
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2852,
    "end": 2853
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2853,
    "end": 2854
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2855,
    "end": 2856
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2856,
    "end": 2857
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 2857,
    "end": 2858
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2858,
    "end": 2859
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2860,
    "end": 2861
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2861,
    "end": 2862
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2863,
    "end": 2864
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2869,
    "end": 2870
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2871,
    "end": 2872
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2873,
    "end": 2874
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2874,
    "end": 2875
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2880,
    "end": 2881
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2882,
    "end": 2883
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2884,
    "end": 2885
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2885,
    "end": 2886
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2897,
    "end": 2898
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2900,
    "end": 2908
  },
  {
    "type": "Identifier",
    "value": "f73",
    "start": 2909,
    "end": 2912
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2912,
    "end": 2913
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2913,
    "end": 2914
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2914,
    "end": 2915
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 2916,
    "end": 2917
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2918,
    "end": 2925
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 2926,
    "end": 2931
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2932,
    "end": 2933
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2933,
    "end": 2934
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2934,
    "end": 2935
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2935,
    "end": 2936
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2936,
    "end": 2937
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2938,
    "end": 2939
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2940,
    "end": 2941
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 2941,
    "end": 2942
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 2943,
    "end": 2945
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 2946,
    "end": 2947
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2947,
    "end": 2948
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2948,
    "end": 2949
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2950,
    "end": 2951
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2951,
    "end": 2952
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 2952,
    "end": 2953
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2953,
    "end": 2954
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2955,
    "end": 2956
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2956,
    "end": 2957
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2958,
    "end": 2959
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2959,
    "end": 2960
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2961,
    "end": 2962
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2963,
    "end": 2964
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 2964,
    "end": 2965
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 2966,
    "end": 2968
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 2969,
    "end": 2974
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2975,
    "end": 2976
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2976,
    "end": 2977
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2977,
    "end": 2978
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2979,
    "end": 2980
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2980,
    "end": 2981
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 2981,
    "end": 2982
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2982,
    "end": 2983
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2984,
    "end": 2985
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2985,
    "end": 2986
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2987,
    "end": 2988
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2993,
    "end": 2994
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2995,
    "end": 2996
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2997,
    "end": 2998
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2998,
    "end": 2999
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 3004,
    "end": 3005
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3006,
    "end": 3007
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3008,
    "end": 3009
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3009,
    "end": 3010
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3021,
    "end": 3022
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3024,
    "end": 3032
  },
  {
    "type": "Identifier",
    "value": "f74",
    "start": 3033,
    "end": 3036
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3036,
    "end": 3037
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3037,
    "end": 3038
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3038,
    "end": 3039
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 3040,
    "end": 3041
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3042,
    "end": 3049
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3050,
    "end": 3051
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3051,
    "end": 3052
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 3053,
    "end": 3054
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3055,
    "end": 3062
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 3063,
    "end": 3068
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3069,
    "end": 3070
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3070,
    "end": 3071
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3071,
    "end": 3072
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3072,
    "end": 3073
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3073,
    "end": 3074
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3075,
    "end": 3076
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3077,
    "end": 3078
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 3078,
    "end": 3079
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 3080,
    "end": 3082
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 3083,
    "end": 3084
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3084,
    "end": 3085
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3085,
    "end": 3086
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3087,
    "end": 3088
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3088,
    "end": 3089
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 3089,
    "end": 3090
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3090,
    "end": 3091
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3092,
    "end": 3093
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3093,
    "end": 3094
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 3095,
    "end": 3096
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3096,
    "end": 3097
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3098,
    "end": 3099
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3100,
    "end": 3101
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 3101,
    "end": 3102
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 3103,
    "end": 3105
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 3106,
    "end": 3111
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 3112,
    "end": 3113
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3113,
    "end": 3114
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3114,
    "end": 3115
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 3116,
    "end": 3117
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3117,
    "end": 3118
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 3118,
    "end": 3119
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3119,
    "end": 3120
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3121,
    "end": 3122
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3122,
    "end": 3123
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3124,
    "end": 3125
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3130,
    "end": 3131
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3132,
    "end": 3133
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 3134,
    "end": 3135
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3135,
    "end": 3136
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 3141,
    "end": 3142
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3143,
    "end": 3144
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3145,
    "end": 3146
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3146,
    "end": 3147
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3158,
    "end": 3159
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3161,
    "end": 3169
  },
  {
    "type": "Identifier",
    "value": "f75",
    "start": 3170,
    "end": 3173
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3173,
    "end": 3174
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3174,
    "end": 3175
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3175,
    "end": 3176
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 3177,
    "end": 3178
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3179,
    "end": 3186
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3187,
    "end": 3188
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3188,
    "end": 3189
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 3190,
    "end": 3191
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3192,
    "end": 3199
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 3200,
    "end": 3205
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3206,
    "end": 3207
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3207,
    "end": 3208
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3208,
    "end": 3209
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3209,
    "end": 3210
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3210,
    "end": 3211
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3212,
    "end": 3213
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3214,
    "end": 3215
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 3215,
    "end": 3216
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 3217,
    "end": 3219
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 3220,
    "end": 3221
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3221,
    "end": 3222
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3222,
    "end": 3223
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3224,
    "end": 3225
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3225,
    "end": 3226
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 3226,
    "end": 3227
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3227,
    "end": 3228
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3229,
    "end": 3230
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3230,
    "end": 3231
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 3232,
    "end": 3233
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3233,
    "end": 3234
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3235,
    "end": 3236
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3237,
    "end": 3238
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 3238,
    "end": 3239
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 3240,
    "end": 3242
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 3243,
    "end": 3248
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3249,
    "end": 3250
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3250,
    "end": 3251
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3251,
    "end": 3252
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 3253,
    "end": 3254
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3254,
    "end": 3255
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 3255,
    "end": 3256
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3256,
    "end": 3257
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3258,
    "end": 3259
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3259,
    "end": 3260
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3261,
    "end": 3262
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3267,
    "end": 3268
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3269,
    "end": 3270
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 3271,
    "end": 3272
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3272,
    "end": 3273
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 3278,
    "end": 3279
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3280,
    "end": 3281
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3282,
    "end": 3283
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3283,
    "end": 3284
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3295,
    "end": 3296
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3298,
    "end": 3306
  },
  {
    "type": "Identifier",
    "value": "f76",
    "start": 3307,
    "end": 3310
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3310,
    "end": 3311
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3311,
    "end": 3312
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3312,
    "end": 3313
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 3314,
    "end": 3315
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3316,
    "end": 3323
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3324,
    "end": 3325
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3325,
    "end": 3326
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 3327,
    "end": 3328
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3329,
    "end": 3336
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 3337,
    "end": 3342
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3343,
    "end": 3344
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3344,
    "end": 3345
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3345,
    "end": 3346
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3346,
    "end": 3347
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3347,
    "end": 3348
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3349,
    "end": 3350
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3351,
    "end": 3352
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 3352,
    "end": 3353
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 3354,
    "end": 3356
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 3357,
    "end": 3358
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3358,
    "end": 3359
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3359,
    "end": 3360
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3361,
    "end": 3362
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3362,
    "end": 3363
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 3363,
    "end": 3364
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3364,
    "end": 3365
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3366,
    "end": 3367
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3367,
    "end": 3368
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 3369,
    "end": 3370
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3370,
    "end": 3371
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3372,
    "end": 3373
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3374,
    "end": 3375
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 3375,
    "end": 3376
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 3377,
    "end": 3379
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 3380,
    "end": 3381
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3381,
    "end": 3382
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3382,
    "end": 3383
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 3384,
    "end": 3385
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3385,
    "end": 3386
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 3386,
    "end": 3387
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3387,
    "end": 3388
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3389,
    "end": 3390
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3390,
    "end": 3391
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3392,
    "end": 3393
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3398,
    "end": 3399
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3400,
    "end": 3401
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 3402,
    "end": 3403
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3403,
    "end": 3404
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 3409,
    "end": 3410
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3411,
    "end": 3412
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3413,
    "end": 3414
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3414,
    "end": 3415
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3426,
    "end": 3427
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3429,
    "end": 3437
  },
  {
    "type": "Identifier",
    "value": "f80",
    "start": 3438,
    "end": 3441
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3441,
    "end": 3442
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3442,
    "end": 3443
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3443,
    "end": 3444
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3444,
    "end": 3445
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 3445,
    "end": 3446
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3446,
    "end": 3447
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3448,
    "end": 3449
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3449,
    "end": 3450
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3450,
    "end": 3451
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 3452,
    "end": 3459
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3459,
    "end": 3460
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3460,
    "end": 3461
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3461,
    "end": 3462
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3463,
    "end": 3464
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3469,
    "end": 3475
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 3476,
    "end": 3477
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3477,
    "end": 3478
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3479,
    "end": 3480
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3482,
    "end": 3490
  },
  {
    "type": "Identifier",
    "value": "f81",
    "start": 3491,
    "end": 3494
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3494,
    "end": 3495
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3495,
    "end": 3496
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3496,
    "end": 3497
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 3498,
    "end": 3499
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3500,
    "end": 3507
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 3508,
    "end": 3513
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3514,
    "end": 3515
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3515,
    "end": 3516
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3516,
    "end": 3517
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 3517,
    "end": 3518
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3518,
    "end": 3519
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3520,
    "end": 3521
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3521,
    "end": 3522
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 3523,
    "end": 3524
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3524,
    "end": 3525
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 3526,
    "end": 3527
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3527,
    "end": 3528
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3528,
    "end": 3529
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 3530,
    "end": 3537
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3537,
    "end": 3538
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3538,
    "end": 3539
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3539,
    "end": 3540
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 3540,
    "end": 3541
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3541,
    "end": 3542
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3542,
    "end": 3543
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3544,
    "end": 3545
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3550,
    "end": 3556
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 3557,
    "end": 3558
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3558,
    "end": 3559
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 3559,
    "end": 3560
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3560,
    "end": 3561
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3561,
    "end": 3562
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3563,
    "end": 3564
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3566,
    "end": 3574
  },
  {
    "type": "Identifier",
    "value": "f82",
    "start": 3575,
    "end": 3578
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3578,
    "end": 3579
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3579,
    "end": 3580
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3580,
    "end": 3581
  },
  {
    "type": "Identifier",
    "value": "K1",
    "start": 3582,
    "end": 3584
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3585,
    "end": 3592
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 3593,
    "end": 3598
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3599,
    "end": 3600
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3600,
    "end": 3601
  },
  {
    "type": "Identifier",
    "value": "K2",
    "start": 3602,
    "end": 3604
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3605,
    "end": 3612
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 3613,
    "end": 3618
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3619,
    "end": 3620
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3620,
    "end": 3621
  },
  {
    "type": "Identifier",
    "value": "K1",
    "start": 3621,
    "end": 3623
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3623,
    "end": 3624
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3624,
    "end": 3625
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3625,
    "end": 3626
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 3626,
    "end": 3627
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3627,
    "end": 3628
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3629,
    "end": 3630
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3630,
    "end": 3631
  },
  {
    "type": "Identifier",
    "value": "k1",
    "start": 3632,
    "end": 3634
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3634,
    "end": 3635
  },
  {
    "type": "Identifier",
    "value": "K1",
    "start": 3636,
    "end": 3638
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3638,
    "end": 3639
  },
  {
    "type": "Identifier",
    "value": "k2",
    "start": 3640,
    "end": 3642
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3642,
    "end": 3643
  },
  {
    "type": "Identifier",
    "value": "K2",
    "start": 3644,
    "end": 3646
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3646,
    "end": 3647
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3647,
    "end": 3648
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 3649,
    "end": 3656
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3656,
    "end": 3657
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3657,
    "end": 3658
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3658,
    "end": 3659
  },
  {
    "type": "Identifier",
    "value": "K1",
    "start": 3659,
    "end": 3661
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3661,
    "end": 3662
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3662,
    "end": 3663
  },
  {
    "type": "Identifier",
    "value": "K2",
    "start": 3663,
    "end": 3665
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3665,
    "end": 3666
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3666,
    "end": 3667
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3668,
    "end": 3669
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3674,
    "end": 3680
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 3681,
    "end": 3682
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3682,
    "end": 3683
  },
  {
    "type": "Identifier",
    "value": "k1",
    "start": 3683,
    "end": 3685
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3685,
    "end": 3686
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3686,
    "end": 3687
  },
  {
    "type": "Identifier",
    "value": "k2",
    "start": 3687,
    "end": 3689
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3689,
    "end": 3690
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3690,
    "end": 3691
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3692,
    "end": 3693
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3705,
    "end": 3709
  },
  {
    "type": "Identifier",
    "value": "Numeric",
    "start": 3710,
    "end": 3717
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3717,
    "end": 3718
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3718,
    "end": 3719
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3719,
    "end": 3720
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3721,
    "end": 3722
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3723,
    "end": 3724
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3725,
    "end": 3726
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 3726,
    "end": 3727
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 3728,
    "end": 3730
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 3731,
    "end": 3736
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3737,
    "end": 3738
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3738,
    "end": 3739
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3739,
    "end": 3740
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3740,
    "end": 3741
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3742,
    "end": 3748
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3749,
    "end": 3750
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3750,
    "end": 3751
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3752,
    "end": 3760
  },
  {
    "type": "Identifier",
    "value": "f90",
    "start": 3761,
    "end": 3764
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3764,
    "end": 3765
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3765,
    "end": 3766
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3767,
    "end": 3774
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3775,
    "end": 3776
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3777,
    "end": 3778
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3778,
    "end": 3779
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3780,
    "end": 3786
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3787,
    "end": 3788
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3788,
    "end": 3789
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3789,
    "end": 3790
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3790,
    "end": 3791
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3792,
    "end": 3793
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3798,
    "end": 3803
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 3804,
    "end": 3805
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3805,
    "end": 3806
  },
  {
    "type": "Identifier",
    "value": "Numeric",
    "start": 3807,
    "end": 3814
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3814,
    "end": 3815
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3815,
    "end": 3816
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3816,
    "end": 3817
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3818,
    "end": 3819
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3820,
    "end": 3821
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3822,
    "end": 3823
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3823,
    "end": 3824
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3825,
    "end": 3826
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3827,
    "end": 3828
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3828,
    "end": 3829
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3830,
    "end": 3831
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3833,
    "end": 3841
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 3842,
    "end": 3843
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3843,
    "end": 3844
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3844,
    "end": 3845
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3846,
    "end": 3853
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3854,
    "end": 3855
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3856,
    "end": 3857
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3857,
    "end": 3858
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3859,
    "end": 3860
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3860,
    "end": 3861
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3862,
    "end": 3863
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3863,
    "end": 3864
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3864,
    "end": 3865
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3865,
    "end": 3866
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3866,
    "end": 3867
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 3868,
    "end": 3875
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3875,
    "end": 3876
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3876,
    "end": 3877
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3877,
    "end": 3878
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3879,
    "end": 3880
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3885,
    "end": 3891
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 3892,
    "end": 3901
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 3901,
    "end": 3902
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 3903,
    "end": 3905
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3906,
    "end": 3907
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3907,
    "end": 3908
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3909,
    "end": 3910
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3922,
    "end": 3931
  },
  {
    "type": "Identifier",
    "value": "SettingsTypes",
    "start": 3932,
    "end": 3945
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3946,
    "end": 3947
  },
  {
    "type": "Identifier",
    "value": "audio",
    "start": 3950,
    "end": 3955
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3955,
    "end": 3956
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3957,
    "end": 3958
  },
  {
    "type": "Identifier",
    "value": "volume",
    "start": 3963,
    "end": 3969
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3969,
    "end": 3970
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3971,
    "end": 3977
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3977,
    "end": 3978
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3981,
    "end": 3982
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3982,
    "end": 3983
  },
  {
    "type": "Identifier",
    "value": "video",
    "start": 3986,
    "end": 3991
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3991,
    "end": 3992
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3993,
    "end": 3994
  },
  {
    "type": "Identifier",
    "value": "resolution",
    "start": 3999,
    "end": 4009
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4009,
    "end": 4010
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4011,
    "end": 4017
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4017,
    "end": 4018
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4021,
    "end": 4022
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4022,
    "end": 4023
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4024,
    "end": 4025
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 4026,
    "end": 4035
  },
  {
    "type": "Identifier",
    "value": "Settings",
    "start": 4036,
    "end": 4044
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4044,
    "end": 4045
  },
  {
    "type": "Identifier",
    "value": "Params",
    "start": 4045,
    "end": 4051
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4052,
    "end": 4059
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4060,
    "end": 4061
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4062,
    "end": 4063
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 4063,
    "end": 4064
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 4065,
    "end": 4067
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 4068,
    "end": 4073
  },
  {
    "type": "Identifier",
    "value": "Params",
    "start": 4074,
    "end": 4080
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4080,
    "end": 4081
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 4081,
    "end": 4082
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4082,
    "end": 4083
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4084,
    "end": 4090
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4091,
    "end": 4092
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4092,
    "end": 4093
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4094,
    "end": 4095
  },
  {
    "type": "Identifier",
    "value": "config",
    "start": 4098,
    "end": 4104
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4104,
    "end": 4105
  },
  {
    "type": "Identifier",
    "value": "Params",
    "start": 4106,
    "end": 4112
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4112,
    "end": 4113
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4114,
    "end": 4115
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4116,
    "end": 4120
  },
  {
    "type": "Identifier",
    "value": "ConcreteSettingsResult1",
    "start": 4121,
    "end": 4144
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4145,
    "end": 4146
  },
  {
    "type": "Identifier",
    "value": "Settings",
    "start": 4147,
    "end": 4155
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4155,
    "end": 4156
  },
  {
    "type": "Identifier",
    "value": "SettingsTypes",
    "start": 4156,
    "end": 4169
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4169,
    "end": 4170
  },
  {
    "type": "String",
    "value": "\"audio\"",
    "start": 4170,
    "end": 4177
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4177,
    "end": 4178
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4178,
    "end": 4179
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4179,
    "end": 4180
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4181,
    "end": 4185
  },
  {
    "type": "Identifier",
    "value": "ConcreteSettingsResult2",
    "start": 4186,
    "end": 4209
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4210,
    "end": 4211
  },
  {
    "type": "Identifier",
    "value": "Settings",
    "start": 4212,
    "end": 4220
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4220,
    "end": 4221
  },
  {
    "type": "Identifier",
    "value": "SettingsTypes",
    "start": 4221,
    "end": 4234
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4234,
    "end": 4235
  },
  {
    "type": "String",
    "value": "\"audio\"",
    "start": 4235,
    "end": 4242
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4243,
    "end": 4244
  },
  {
    "type": "String",
    "value": "\"video\"",
    "start": 4245,
    "end": 4252
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4252,
    "end": 4253
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4253,
    "end": 4254
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4254,
    "end": 4255
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4256,
    "end": 4260
  },
  {
    "type": "Identifier",
    "value": "GenericSettingsAccess",
    "start": 4261,
    "end": 4282
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4282,
    "end": 4283
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4283,
    "end": 4284
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4285,
    "end": 4292
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 4293,
    "end": 4298
  },
  {
    "type": "Identifier",
    "value": "SettingsTypes",
    "start": 4299,
    "end": 4312
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4312,
    "end": 4313
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4314,
    "end": 4315
  },
  {
    "type": "Identifier",
    "value": "Settings",
    "start": 4316,
    "end": 4324
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4324,
    "end": 4325
  },
  {
    "type": "Identifier",
    "value": "SettingsTypes",
    "start": 4325,
    "end": 4338
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4338,
    "end": 4339
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4339,
    "end": 4340
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4340,
    "end": 4341
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4341,
    "end": 4342
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4342,
    "end": 4343
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4344,
    "end": 4348
  },
  {
    "type": "Identifier",
    "value": "GenericSettingsResult1",
    "start": 4349,
    "end": 4371
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4372,
    "end": 4373
  },
  {
    "type": "Identifier",
    "value": "GenericSettingsAccess",
    "start": 4374,
    "end": 4395
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4395,
    "end": 4396
  },
  {
    "type": "String",
    "value": "\"audio\"",
    "start": 4396,
    "end": 4403
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4403,
    "end": 4404
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4404,
    "end": 4405
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4406,
    "end": 4410
  },
  {
    "type": "Identifier",
    "value": "GenericSettingsResult2",
    "start": 4411,
    "end": 4433
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4434,
    "end": 4435
  },
  {
    "type": "Identifier",
    "value": "GenericSettingsAccess",
    "start": 4436,
    "end": 4457
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4457,
    "end": 4458
  },
  {
    "type": "String",
    "value": "\"audio\"",
    "start": 4458,
    "end": 4465
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4466,
    "end": 4467
  },
  {
    "type": "String",
    "value": "\"video\"",
    "start": 4468,
    "end": 4475
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4475,
    "end": 4476
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4476,
    "end": 4477
  }
]
```
