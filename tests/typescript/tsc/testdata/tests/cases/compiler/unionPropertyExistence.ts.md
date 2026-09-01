__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
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
              "name": "inAll",
              "optional": false,
              "typeAnnotation": null,
              "start": 18,
              "end": 23
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 25,
                "end": 31
              },
              "start": 23,
              "end": 31
            },
            "accessibility": null,
            "static": false,
            "start": 18,
            "end": 32
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "notInB",
              "optional": false,
              "typeAnnotation": null,
              "start": 37,
              "end": 43
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 45,
                "end": 51
              },
              "start": 43,
              "end": 51
            },
            "accessibility": null,
            "static": false,
            "start": 37,
            "end": 52
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "notInC",
              "optional": false,
              "typeAnnotation": null,
              "start": 57,
              "end": 63
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 65,
                "end": 71
              },
              "start": 63,
              "end": 71
            },
            "accessibility": null,
            "static": false,
            "start": 57,
            "end": 72
          }
        ],
        "start": 12,
        "end": 74
      },
      "declare": false,
      "start": 0,
      "end": 74
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 86,
        "end": 87
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
              "name": "inAll",
              "optional": false,
              "typeAnnotation": null,
              "start": 94,
              "end": 99
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 101,
                "end": 108
              },
              "start": 99,
              "end": 108
            },
            "accessibility": null,
            "static": false,
            "start": 94,
            "end": 109
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "onlyInB",
              "optional": false,
              "typeAnnotation": null,
              "start": 114,
              "end": 121
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 123,
                "end": 129
              },
              "start": 121,
              "end": 129
            },
            "accessibility": null,
            "static": false,
            "start": 114,
            "end": 130
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "notInC",
              "optional": false,
              "typeAnnotation": null,
              "start": 135,
              "end": 141
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 143,
                "end": 149
              },
              "start": 141,
              "end": 149
            },
            "accessibility": null,
            "static": false,
            "start": 135,
            "end": 150
          }
        ],
        "start": 88,
        "end": 152
      },
      "declare": false,
      "start": 76,
      "end": 152
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 164,
        "end": 165
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
              "name": "inAll",
              "optional": false,
              "typeAnnotation": null,
              "start": 172,
              "end": 177
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 179,
                "end": 185
              },
              "start": 177,
              "end": 185
            },
            "accessibility": null,
            "static": false,
            "start": 172,
            "end": 186
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "notInB",
              "optional": false,
              "typeAnnotation": null,
              "start": 191,
              "end": 197
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 199,
                "end": 205
              },
              "start": 197,
              "end": 205
            },
            "accessibility": null,
            "static": false,
            "start": 191,
            "end": 206
          }
        ],
        "start": 166,
        "end": 208
      },
      "declare": false,
      "start": 154,
      "end": 208
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AB",
        "optional": false,
        "typeAnnotation": null,
        "start": 215,
        "end": 217
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 220,
              "end": 221
            },
            "typeArguments": null,
            "start": 220,
            "end": 221
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 224,
              "end": 225
            },
            "typeArguments": null,
            "start": 224,
            "end": 225
          }
        ],
        "start": 220,
        "end": 225
      },
      "declare": false,
      "start": 210,
      "end": 226
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ABC",
        "optional": false,
        "typeAnnotation": null,
        "start": 232,
        "end": 235
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 238,
              "end": 239
            },
            "typeArguments": null,
            "start": 238,
            "end": 239
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "AB",
              "optional": false,
              "typeAnnotation": null,
              "start": 242,
              "end": 244
            },
            "typeArguments": null,
            "start": 242,
            "end": 244
          }
        ],
        "start": 238,
        "end": 244
      },
      "declare": false,
      "start": 227,
      "end": 245
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
            "name": "ab",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 263,
                  "end": 265
                },
                "typeArguments": null,
                "start": 263,
                "end": 265
              },
              "start": 261,
              "end": 265
            },
            "start": 259,
            "end": 265
          },
          "init": null,
          "definite": false,
          "start": 259,
          "end": 265
        }
      ],
      "declare": true,
      "start": 247,
      "end": 266
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
            "name": "abc",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ABC",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 284,
                  "end": 287
                },
                "typeArguments": null,
                "start": 284,
                "end": 287
              },
              "start": 282,
              "end": 287
            },
            "start": 279,
            "end": 287
          },
          "init": null,
          "definite": false,
          "start": 279,
          "end": 287
        }
      ],
      "declare": true,
      "start": 267,
      "end": 288
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
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
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "foo",
                      "raw": "\"foo\"",
                      "start": 307,
                      "end": 312
                    },
                    "start": 307,
                    "end": 312
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "bar",
                      "raw": "\"bar\"",
                      "start": 315,
                      "end": 320
                    },
                    "start": 315,
                    "end": 320
                  }
                ],
                "start": 307,
                "end": 320
              },
              "start": 305,
              "end": 320
            },
            "start": 304,
            "end": 320
          },
          "init": null,
          "definite": false,
          "start": 304,
          "end": 320
        }
      ],
      "declare": true,
      "start": 290,
      "end": 321
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "bFoo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 342,
                      "end": 343
                    },
                    "typeArguments": null,
                    "start": 342,
                    "end": 343
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "foo",
                      "raw": "\"foo\"",
                      "start": 346,
                      "end": 351
                    },
                    "start": 346,
                    "end": 351
                  }
                ],
                "start": 342,
                "end": 351
              },
              "start": 340,
              "end": 351
            },
            "start": 336,
            "end": 351
          },
          "init": null,
          "definite": false,
          "start": 336,
          "end": 351
        }
      ],
      "declare": true,
      "start": 322,
      "end": 352
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 354,
            "end": 355
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "nope",
            "optional": false,
            "typeAnnotation": null,
            "start": 356,
            "end": 360
          },
          "optional": false,
          "computed": false,
          "start": 354,
          "end": 360
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 354,
        "end": 362
      },
      "directive": null,
      "start": 354,
      "end": 363
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "bFoo",
          "optional": false,
          "typeAnnotation": null,
          "start": 364,
          "end": 368
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "onlyInB",
          "optional": false,
          "typeAnnotation": null,
          "start": 369,
          "end": 376
        },
        "optional": false,
        "computed": false,
        "start": 364,
        "end": 376
      },
      "directive": null,
      "start": 364,
      "end": 377
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 378,
          "end": 379
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "length",
          "optional": false,
          "typeAnnotation": null,
          "start": 380,
          "end": 386
        },
        "optional": false,
        "computed": false,
        "start": 378,
        "end": 386
      },
      "directive": null,
      "start": 378,
      "end": 387
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "bFoo",
          "optional": false,
          "typeAnnotation": null,
          "start": 394,
          "end": 398
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "length",
          "optional": false,
          "typeAnnotation": null,
          "start": 399,
          "end": 405
        },
        "optional": false,
        "computed": false,
        "start": 394,
        "end": 405
      },
      "directive": null,
      "start": 394,
      "end": 406
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "ab",
          "optional": false,
          "typeAnnotation": null,
          "start": 408,
          "end": 410
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "onlyInB",
          "optional": false,
          "typeAnnotation": null,
          "start": 411,
          "end": 418
        },
        "optional": false,
        "computed": false,
        "start": 408,
        "end": 418
      },
      "directive": null,
      "start": 408,
      "end": 419
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "ab",
          "optional": false,
          "typeAnnotation": null,
          "start": 421,
          "end": 423
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "notInC",
          "optional": false,
          "typeAnnotation": null,
          "start": 424,
          "end": 430
        },
        "optional": false,
        "computed": false,
        "start": 421,
        "end": 430
      },
      "directive": null,
      "start": 421,
      "end": 431
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "abc",
          "optional": false,
          "typeAnnotation": null,
          "start": 438,
          "end": 441
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "notInC",
          "optional": false,
          "typeAnnotation": null,
          "start": 442,
          "end": 448
        },
        "optional": false,
        "computed": false,
        "start": 438,
        "end": 448
      },
      "directive": null,
      "start": 438,
      "end": 449
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "ab",
          "optional": false,
          "typeAnnotation": null,
          "start": 450,
          "end": 452
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "notInB",
          "optional": false,
          "typeAnnotation": null,
          "start": 453,
          "end": 459
        },
        "optional": false,
        "computed": false,
        "start": 450,
        "end": 459
      },
      "directive": null,
      "start": 450,
      "end": 460
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "abc",
          "optional": false,
          "typeAnnotation": null,
          "start": 461,
          "end": 464
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "notInB",
          "optional": false,
          "typeAnnotation": null,
          "start": 465,
          "end": 471
        },
        "optional": false,
        "computed": false,
        "start": 461,
        "end": 471
      },
      "directive": null,
      "start": 461,
      "end": 472
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "abc",
          "optional": false,
          "typeAnnotation": null,
          "start": 474,
          "end": 477
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "inAll",
          "optional": false,
          "typeAnnotation": null,
          "start": 478,
          "end": 483
        },
        "optional": false,
        "computed": false,
        "start": 474,
        "end": 483
      },
      "directive": null,
      "start": 474,
      "end": 484
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "abc",
          "optional": false,
          "typeAnnotation": null,
          "start": 491,
          "end": 494
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "inNone",
          "optional": false,
          "typeAnnotation": null,
          "start": 495,
          "end": 501
        },
        "optional": false,
        "computed": false,
        "start": 491,
        "end": 501
      },
      "directive": null,
      "start": 491,
      "end": 502
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 502
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 0,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 10,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 12,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "inAll",
    "start": 18,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 23,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 25,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 31,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "notInB",
    "start": 37,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 43,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 45,
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
    "value": "notInC",
    "start": 57,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 63,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 65,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 73,
    "end": 74
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 76,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "B",
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
    "type": "Identifier",
    "value": "inAll",
    "start": 94,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 99,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 101,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 108,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "onlyInB",
    "start": 114,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 121,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 123,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 129,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "notInC",
    "start": 135,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 141,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 143,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 151,
    "end": 152
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 154,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 164,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 166,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "inAll",
    "start": 172,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 177,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 179,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 185,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "notInB",
    "start": 191,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 197,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 199,
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
    "type": "Identifier",
    "value": "type",
    "start": 210,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "AB",
    "start": 215,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 218,
    "end": 219
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 220,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 222,
    "end": 223
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 224,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 225,
    "end": 226
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 227,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "ABC",
    "start": 232,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 236,
    "end": 237
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 238,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 240,
    "end": 241
  },
  {
    "type": "Identifier",
    "value": "AB",
    "start": 242,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 244,
    "end": 245
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 247,
    "end": 254
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 255,
    "end": 258
  },
  {
    "type": "Identifier",
    "value": "ab",
    "start": 259,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 261,
    "end": 262
  },
  {
    "type": "Identifier",
    "value": "AB",
    "start": 263,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 265,
    "end": 266
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 267,
    "end": 274
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 275,
    "end": 278
  },
  {
    "type": "Identifier",
    "value": "abc",
    "start": 279,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 282,
    "end": 283
  },
  {
    "type": "Identifier",
    "value": "ABC",
    "start": 284,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 287,
    "end": 288
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 290,
    "end": 297
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 298,
    "end": 303
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 304,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 305,
    "end": 306
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 307,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 313,
    "end": 314
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 315,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 320,
    "end": 321
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 322,
    "end": 329
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 330,
    "end": 335
  },
  {
    "type": "Identifier",
    "value": "bFoo",
    "start": 336,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 340,
    "end": 341
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 342,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 344,
    "end": 345
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 346,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 351,
    "end": 352
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 354,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 355,
    "end": 356
  },
  {
    "type": "Identifier",
    "value": "nope",
    "start": 356,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 360,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 361,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 362,
    "end": 363
  },
  {
    "type": "Identifier",
    "value": "bFoo",
    "start": 364,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 368,
    "end": 369
  },
  {
    "type": "Identifier",
    "value": "onlyInB",
    "start": 369,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 376,
    "end": 377
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 378,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 379,
    "end": 380
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 380,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 386,
    "end": 387
  },
  {
    "type": "Identifier",
    "value": "bFoo",
    "start": 394,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 398,
    "end": 399
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 399,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 405,
    "end": 406
  },
  {
    "type": "Identifier",
    "value": "ab",
    "start": 408,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 410,
    "end": 411
  },
  {
    "type": "Identifier",
    "value": "onlyInB",
    "start": 411,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 418,
    "end": 419
  },
  {
    "type": "Identifier",
    "value": "ab",
    "start": 421,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 423,
    "end": 424
  },
  {
    "type": "Identifier",
    "value": "notInC",
    "start": 424,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 430,
    "end": 431
  },
  {
    "type": "Identifier",
    "value": "abc",
    "start": 438,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 441,
    "end": 442
  },
  {
    "type": "Identifier",
    "value": "notInC",
    "start": 442,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 448,
    "end": 449
  },
  {
    "type": "Identifier",
    "value": "ab",
    "start": 450,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 452,
    "end": 453
  },
  {
    "type": "Identifier",
    "value": "notInB",
    "start": 453,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 459,
    "end": 460
  },
  {
    "type": "Identifier",
    "value": "abc",
    "start": 461,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 464,
    "end": 465
  },
  {
    "type": "Identifier",
    "value": "notInB",
    "start": 465,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 471,
    "end": 472
  },
  {
    "type": "Identifier",
    "value": "abc",
    "start": 474,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 477,
    "end": 478
  },
  {
    "type": "Identifier",
    "value": "inAll",
    "start": 478,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 483,
    "end": 484
  },
  {
    "type": "Identifier",
    "value": "abc",
    "start": 491,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 494,
    "end": 495
  },
  {
    "type": "Identifier",
    "value": "inNone",
    "start": 495,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 501,
    "end": 502
  }
]
```
