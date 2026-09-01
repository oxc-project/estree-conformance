__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 7
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "fooField",
              "start": 14,
              "end": 23
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 3,
              "raw": "3",
              "start": 26,
              "end": 27
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 14,
            "end": 28
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "fooMethod",
              "start": 33,
              "end": 43
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 46,
                "end": 49
              },
              "expression": false,
              "start": 43,
              "end": 49
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 33,
            "end": 49
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "fooProp",
              "start": 59,
              "end": 67
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 79,
                      "end": 80
                    },
                    "start": 72,
                    "end": 81
                  }
                ],
                "start": 70,
                "end": 83
              },
              "expression": false,
              "start": 67,
              "end": 83
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 55,
            "end": 83
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "fooProp",
              "start": 93,
              "end": 101
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 109,
                      "end": 115
                    },
                    "start": 107,
                    "end": 115
                  },
                  "start": 102,
                  "end": 115
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 117,
                "end": 120
              },
              "expression": false,
              "start": 101,
              "end": 120
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 89,
            "end": 120
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 126,
              "end": 129
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 3,
              "raw": "3",
              "start": 132,
              "end": 133
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 126,
            "end": 134
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "baz",
              "optional": false,
              "typeAnnotation": null,
              "start": 139,
              "end": 142
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 3,
              "raw": "3",
              "start": 145,
              "end": 146
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 139,
            "end": 147
          }
        ],
        "start": 8,
        "end": 149
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 149
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
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
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 204,
                    "end": 205
                  },
                  "typeArguments": null,
                  "start": 204,
                  "end": 205
                },
                "start": 198,
                "end": 205
              },
              "start": 196,
              "end": 205
            },
            "start": 195,
            "end": 205
          },
          "init": {
            "type": "Literal",
            "value": "bar",
            "raw": "\"bar\"",
            "start": 208,
            "end": 213
          },
          "definite": false,
          "start": 195,
          "end": 213
        }
      ],
      "declare": false,
      "start": 191,
      "end": 214
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": null,
          "start": 221,
          "end": 222
        },
        "right": {
          "type": "Literal",
          "value": "baz",
          "raw": "\"baz\"",
          "start": 225,
          "end": 230
        },
        "start": 221,
        "end": 230
      },
      "directive": null,
      "start": 221,
      "end": 231
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": null,
          "start": 239,
          "end": 240
        },
        "right": {
          "type": "Literal",
          "value": "#fooField",
          "raw": "\"#fooField\"",
          "start": 243,
          "end": 254
        },
        "start": 239,
        "end": 254
      },
      "directive": null,
      "start": 239,
      "end": 255
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": null,
          "start": 265,
          "end": 266
        },
        "right": {
          "type": "Literal",
          "value": "#fooMethod",
          "raw": "\"#fooMethod\"",
          "start": 269,
          "end": 281
        },
        "start": 265,
        "end": 281
      },
      "directive": null,
      "start": 265,
      "end": 282
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": null,
          "start": 292,
          "end": 293
        },
        "right": {
          "type": "Literal",
          "value": "#fooProp",
          "raw": "\"#fooProp\"",
          "start": 296,
          "end": 306
        },
        "start": 292,
        "end": 306
      },
      "directive": null,
      "start": 292,
      "end": 307
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": null,
          "start": 318,
          "end": 319
        },
        "right": {
          "type": "Literal",
          "value": "fooField",
          "raw": "\"fooField\"",
          "start": 322,
          "end": 332
        },
        "start": 318,
        "end": 332
      },
      "directive": null,
      "start": 318,
      "end": 333
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": null,
          "start": 343,
          "end": 344
        },
        "right": {
          "type": "Literal",
          "value": "fooMethod",
          "raw": "\"fooMethod\"",
          "start": 347,
          "end": 358
        },
        "start": 343,
        "end": 358
      },
      "directive": null,
      "start": 343,
      "end": 359
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": null,
          "start": 369,
          "end": 370
        },
        "right": {
          "type": "Literal",
          "value": "fooProp",
          "raw": "\"fooProp\"",
          "start": 373,
          "end": 382
        },
        "start": 369,
        "end": 382
      },
      "directive": null,
      "start": 369,
      "end": 383
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 392
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 6,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8,
    "end": 9
  },
  {
    "type": "PrivateIdentifier",
    "value": "fooField",
    "start": 14,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 24,
    "end": 25
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 26,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 27,
    "end": 28
  },
  {
    "type": "PrivateIdentifier",
    "value": "fooMethod",
    "start": 33,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 43,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 44,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 48,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 49,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 55,
    "end": 58
  },
  {
    "type": "PrivateIdentifier",
    "value": "fooProp",
    "start": 59,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 70,
    "end": 71
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 72,
    "end": 78
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 83,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 89,
    "end": 92
  },
  {
    "type": "PrivateIdentifier",
    "value": "fooProp",
    "start": 93,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 101,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 102,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 107,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 109,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 117,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 120,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 126,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 130,
    "end": 131
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 132,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 133,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 139,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 143,
    "end": 144
  },
  {
    "type": "Numeric",
    "value": "3",
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
    "type": "Punctuator",
    "value": "}",
    "start": 148,
    "end": 149
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 191,
    "end": 194
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 196,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 198,
    "end": 203
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 204,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 206,
    "end": 207
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 208,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 213,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 223,
    "end": 224
  },
  {
    "type": "String",
    "value": "\"baz\"",
    "start": 225,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 230,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 239,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 241,
    "end": 242
  },
  {
    "type": "String",
    "value": "\"#fooField\"",
    "start": 243,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 254,
    "end": 255
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 265,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 267,
    "end": 268
  },
  {
    "type": "String",
    "value": "\"#fooMethod\"",
    "start": 269,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 281,
    "end": 282
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 292,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 294,
    "end": 295
  },
  {
    "type": "String",
    "value": "\"#fooProp\"",
    "start": 296,
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
    "value": "k",
    "start": 318,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 320,
    "end": 321
  },
  {
    "type": "String",
    "value": "\"fooField\"",
    "start": 322,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 332,
    "end": 333
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 343,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 345,
    "end": 346
  },
  {
    "type": "String",
    "value": "\"fooMethod\"",
    "start": 347,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 358,
    "end": 359
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 369,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 371,
    "end": 372
  },
  {
    "type": "String",
    "value": "\"fooProp\"",
    "start": 373,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 382,
    "end": 383
  }
]
```
