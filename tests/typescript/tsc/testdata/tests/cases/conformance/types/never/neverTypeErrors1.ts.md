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
      "typeParameters": null,
      "params": [],
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNeverKeyword",
                      "start": 27,
                      "end": 32
                    },
                    "start": 25,
                    "end": 32
                  },
                  "start": 24,
                  "end": 32
                },
                "init": null,
                "definite": false,
                "start": 24,
                "end": 32
              }
            ],
            "declare": false,
            "start": 20,
            "end": 33
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
                "start": 38,
                "end": 39
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 42,
                "end": 43
              },
              "start": 38,
              "end": 43
            },
            "directive": null,
            "start": 38,
            "end": 44
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
                "start": 49,
                "end": 50
              },
              "right": {
                "type": "Literal",
                "value": "abc",
                "raw": "\"abc\"",
                "start": 53,
                "end": 58
              },
              "start": 49,
              "end": 58
            },
            "directive": null,
            "start": 49,
            "end": 59
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
                "type": "Literal",
                "value": false,
                "raw": "false",
                "start": 68,
                "end": 73
              },
              "start": 64,
              "end": 73
            },
            "directive": null,
            "start": 64,
            "end": 74
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
                "start": 79,
                "end": 80
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 83,
                "end": 92
              },
              "start": 79,
              "end": 92
            },
            "directive": null,
            "start": 79,
            "end": 93
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
                "start": 98,
                "end": 99
              },
              "right": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 102,
                "end": 106
              },
              "start": 98,
              "end": 106
            },
            "directive": null,
            "start": 98,
            "end": 107
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
                "start": 112,
                "end": 113
              },
              "right": {
                "type": "ObjectExpression",
                "properties": [],
                "start": 116,
                "end": 118
              },
              "start": 112,
              "end": 118
            },
            "directive": null,
            "start": 112,
            "end": 119
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 124,
                "end": 125
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 124,
              "end": 127
            },
            "directive": null,
            "start": 124,
            "end": 128
          }
        ],
        "start": 14,
        "end": 130
      },
      "expression": false,
      "start": 0,
      "end": 130
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 141,
        "end": 143
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNeverKeyword",
          "start": 147,
          "end": 152
        },
        "start": 145,
        "end": 152
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": null,
            "start": 159,
            "end": 166
          }
        ],
        "start": 153,
        "end": 168
      },
      "expression": false,
      "start": 132,
      "end": 168
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 179,
        "end": 181
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNeverKeyword",
          "start": 185,
          "end": 190
        },
        "start": 183,
        "end": 190
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 204,
              "end": 205
            },
            "start": 197,
            "end": 206
          }
        ],
        "start": 191,
        "end": 208
      },
      "expression": false,
      "start": 170,
      "end": 208
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 219,
        "end": 221
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNeverKeyword",
          "start": 225,
          "end": 230
        },
        "start": 223,
        "end": 230
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 231,
        "end": 234
      },
      "expression": false,
      "start": 210,
      "end": 234
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
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
              "typeAnnotation": null,
              "start": 247,
              "end": 248
            },
            "init": null,
            "definite": false,
            "start": 247,
            "end": 248
          }
        ],
        "declare": false,
        "start": 241,
        "end": 248
      },
      "right": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f4",
          "optional": false,
          "typeAnnotation": null,
          "start": 252,
          "end": 254
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 252,
        "end": 256
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 258,
        "end": 260
      },
      "start": 236,
      "end": 260
    },
    {
      "type": "ForInStatement",
      "left": {
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
              "typeAnnotation": null,
              "start": 272,
              "end": 273
            },
            "init": null,
            "definite": false,
            "start": 272,
            "end": 273
          }
        ],
        "declare": false,
        "start": 266,
        "end": 273
      },
      "right": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f4",
          "optional": false,
          "typeAnnotation": null,
          "start": 277,
          "end": 279
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 277,
        "end": 281
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 283,
        "end": 285
      },
      "start": 261,
      "end": 285
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null,
        "start": 296,
        "end": 298
      },
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
            "type": "VariableDeclaration",
            "kind": "let",
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
                        "type": "TSNeverKeyword",
                        "start": 314,
                        "end": 319
                      },
                      "start": 314,
                      "end": 321
                    },
                    "start": 312,
                    "end": 321
                  },
                  "start": 311,
                  "end": 321
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [],
                  "start": 324,
                  "end": 326
                },
                "definite": false,
                "start": 311,
                "end": 326
              }
            ],
            "declare": false,
            "start": 307,
            "end": 327
          }
        ],
        "start": 301,
        "end": 336
      },
      "expression": false,
      "start": 287,
      "end": 336
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 370,
        "end": 371
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 378,
              "end": 381
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "a",
                  "raw": "\"a\"",
                  "start": 383,
                  "end": 386
                },
                "start": 383,
                "end": 386
              },
              "start": 381,
              "end": 386
            },
            "accessibility": null,
            "static": false,
            "start": 378,
            "end": 387
          }
        ],
        "start": 372,
        "end": 389
      },
      "declare": false,
      "start": 360,
      "end": 389
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 401,
        "end": 402
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 409,
              "end": 412
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "b",
                  "raw": "\"b\"",
                  "start": 414,
                  "end": 417
                },
                "start": 414,
                "end": 417
              },
              "start": 412,
              "end": 417
            },
            "accessibility": null,
            "static": false,
            "start": 409,
            "end": 418
          }
        ],
        "start": 403,
        "end": 420
      },
      "declare": false,
      "start": 391,
      "end": 420
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Union",
        "optional": false,
        "typeAnnotation": null,
        "start": 427,
        "end": 432
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 435,
              "end": 436
            },
            "typeArguments": null,
            "start": 435,
            "end": 436
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 439,
              "end": 440
            },
            "typeArguments": null,
            "start": 439,
            "end": 440
          }
        ],
        "start": 435,
        "end": 440
      },
      "declare": false,
      "start": 422,
      "end": 441
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "func",
        "optional": false,
        "typeAnnotation": null,
        "start": 452,
        "end": 456
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
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
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 462,
                "end": 467
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Union",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 469,
                      "end": 474
                    },
                    "typeArguments": null,
                    "start": 469,
                    "end": 474
                  },
                  "start": 469,
                  "end": 476
                },
                "start": 467,
                "end": 476
              },
              "accessibility": null,
              "static": false,
              "start": 462,
              "end": 476
            }
          ],
          "start": 460,
          "end": 478
        },
        "start": 458,
        "end": 478
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 502,
                    "end": 507
                  },
                  "value": {
                    "type": "ArrayExpression",
                    "elements": [],
                    "start": 509,
                    "end": 511
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 502,
                  "end": 511
                }
              ],
              "start": 492,
              "end": 518
            },
            "start": 485,
            "end": 519
          }
        ],
        "start": 479,
        "end": 521
      },
      "expression": false,
      "start": 443,
      "end": 521
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 521
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
    "type": "Keyword",
    "value": "let",
    "start": 20,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 24,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 25,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 27,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 32,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 40,
    "end": 41
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 43,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 51,
    "end": 52
  },
  {
    "type": "String",
    "value": "\"abc\"",
    "start": 53,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 58,
    "end": 59
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
    "type": "Boolean",
    "value": "false",
    "start": 68,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 73,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 81,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 83,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 92,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 100,
    "end": 101
  },
  {
    "type": "Null",
    "value": "null",
    "start": 102,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 106,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 112,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Identifier",
    "value": "x",
    "start": 124,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 126,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 129,
    "end": 130
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 132,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 141,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 145,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 147,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 153,
    "end": 154
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 159,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 167,
    "end": 168
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 170,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 179,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": ":",
    "start": 183,
    "end": 184
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 185,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 191,
    "end": 192
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 197,
    "end": 203
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 204,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 205,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 207,
    "end": 208
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 210,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 219,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 222,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 223,
    "end": 224
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 225,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 231,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 233,
    "end": 234
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 236,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 240,
    "end": 241
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 241,
    "end": 246
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 247,
    "end": 248
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 249,
    "end": 251
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 252,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 254,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 255,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 256,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 258,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 259,
    "end": 260
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 261,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 265,
    "end": 266
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 266,
    "end": 271
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 272,
    "end": 273
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 274,
    "end": 276
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 277,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 279,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 280,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 281,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 283,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 284,
    "end": 285
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 287,
    "end": 295
  },
  {
    "type": "Identifier",
    "value": "f5",
    "start": 296,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 298,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 299,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 301,
    "end": 302
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 307,
    "end": 310
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 311,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 312,
    "end": 313
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 314,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 319,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 320,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 322,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 324,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 325,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 326,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 335,
    "end": 336
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 360,
    "end": 369
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 370,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 372,
    "end": 373
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 378,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 381,
    "end": 382
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 383,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 386,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 388,
    "end": 389
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 391,
    "end": 400
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 401,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 403,
    "end": 404
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 409,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 412,
    "end": 413
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 414,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 417,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 419,
    "end": 420
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 422,
    "end": 426
  },
  {
    "type": "Identifier",
    "value": "Union",
    "start": 427,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 433,
    "end": 434
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 435,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 437,
    "end": 438
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 439,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 440,
    "end": 441
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 443,
    "end": 451
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 452,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 456,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 457,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 458,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 460,
    "end": 461
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 462,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 467,
    "end": 468
  },
  {
    "type": "Identifier",
    "value": "Union",
    "start": 469,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 474,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 475,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 477,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 479,
    "end": 480
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 485,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 492,
    "end": 493
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 502,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 507,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 509,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 510,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 511,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 517,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 518,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 520,
    "end": 521
  }
]
```
