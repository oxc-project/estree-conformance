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
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 14
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
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 30,
              "end": 35
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 37,
                "end": 43
              },
              "start": 35,
              "end": 43
            },
            "accessibility": null,
            "static": false,
            "start": 21,
            "end": 44
          }
        ],
        "start": 15,
        "end": 46
      },
      "declare": false,
      "start": 0,
      "end": 46
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Identical",
        "optional": false,
        "typeAnnotation": null,
        "start": 57,
        "end": 66
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
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 82,
              "end": 87
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 89,
                "end": 95
              },
              "start": 87,
              "end": 95
            },
            "accessibility": null,
            "static": false,
            "start": 73,
            "end": 96
          }
        ],
        "start": 67,
        "end": 98
      },
      "declare": false,
      "start": 47,
      "end": 98
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Mutable",
        "optional": false,
        "typeAnnotation": null,
        "start": 109,
        "end": 116
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
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 123,
              "end": 128
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 130,
                "end": 136
              },
              "start": 128,
              "end": 136
            },
            "accessibility": null,
            "static": false,
            "start": 123,
            "end": 137
          }
        ],
        "start": 117,
        "end": 139
      },
      "declare": false,
      "start": 99,
      "end": 139
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DifferentType",
        "optional": false,
        "typeAnnotation": null,
        "start": 150,
        "end": 163
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
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 179,
              "end": 184
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 186,
                "end": 192
              },
              "start": 184,
              "end": 192
            },
            "accessibility": null,
            "static": false,
            "start": 170,
            "end": 193
          }
        ],
        "start": 164,
        "end": 195
      },
      "declare": false,
      "start": 140,
      "end": 195
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DifferentName",
        "optional": false,
        "typeAnnotation": null,
        "start": 206,
        "end": 219
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
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "other",
              "optional": false,
              "typeAnnotation": null,
              "start": 235,
              "end": 240
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 242,
                "end": 248
              },
              "start": 240,
              "end": 248
            },
            "accessibility": null,
            "static": false,
            "start": 226,
            "end": 249
          }
        ],
        "start": 220,
        "end": 251
      },
      "declare": false,
      "start": 196,
      "end": 251
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
            "name": "base",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 270,
                  "end": 274
                },
                "typeArguments": null,
                "start": 270,
                "end": 274
              },
              "start": 268,
              "end": 274
            },
            "start": 264,
            "end": 274
          },
          "init": null,
          "definite": false,
          "start": 264,
          "end": 274
        }
      ],
      "declare": true,
      "start": 252,
      "end": 275
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
            "name": "base",
            "optional": false,
            "typeAnnotation": null,
            "start": 276,
            "end": 280
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null,
            "start": 281,
            "end": 286
          },
          "optional": false,
          "computed": false,
          "start": 276,
          "end": 286
        },
        "right": {
          "type": "Literal",
          "value": 12,
          "raw": "12",
          "start": 289,
          "end": 291
        },
        "start": 276,
        "end": 291
      },
      "directive": null,
      "start": 276,
      "end": 291
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
            "name": "identical",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Base",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 358,
                      "end": 362
                    },
                    "typeArguments": null,
                    "start": 358,
                    "end": 362
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Identical",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 365,
                      "end": 374
                    },
                    "typeArguments": null,
                    "start": 365,
                    "end": 374
                  }
                ],
                "start": 358,
                "end": 374
              },
              "start": 356,
              "end": 374
            },
            "start": 347,
            "end": 374
          },
          "init": null,
          "definite": false,
          "start": 347,
          "end": 374
        }
      ],
      "declare": true,
      "start": 335,
      "end": 375
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
            "name": "identical",
            "optional": false,
            "typeAnnotation": null,
            "start": 376,
            "end": 385
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null,
            "start": 386,
            "end": 391
          },
          "optional": false,
          "computed": false,
          "start": 376,
          "end": 391
        },
        "right": {
          "type": "Literal",
          "value": 12,
          "raw": "12",
          "start": 394,
          "end": 396
        },
        "start": 376,
        "end": 396
      },
      "directive": null,
      "start": 376,
      "end": 397
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
            "name": "mutable",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Base",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 462,
                      "end": 466
                    },
                    "typeArguments": null,
                    "start": 462,
                    "end": 466
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Mutable",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 469,
                      "end": 476
                    },
                    "typeArguments": null,
                    "start": 469,
                    "end": 476
                  }
                ],
                "start": 462,
                "end": 476
              },
              "start": 460,
              "end": 476
            },
            "start": 453,
            "end": 476
          },
          "init": null,
          "definite": false,
          "start": 453,
          "end": 476
        }
      ],
      "declare": true,
      "start": 441,
      "end": 477
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
            "name": "mutable",
            "optional": false,
            "typeAnnotation": null,
            "start": 478,
            "end": 485
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null,
            "start": 486,
            "end": 491
          },
          "optional": false,
          "computed": false,
          "start": 478,
          "end": 491
        },
        "right": {
          "type": "Literal",
          "value": 12,
          "raw": "12",
          "start": 494,
          "end": 496
        },
        "start": 478,
        "end": 496
      },
      "directive": null,
      "start": 478,
      "end": 497
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
            "name": "differentType",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Base",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 525,
                      "end": 529
                    },
                    "typeArguments": null,
                    "start": 525,
                    "end": 529
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "DifferentType",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 532,
                      "end": 545
                    },
                    "typeArguments": null,
                    "start": 532,
                    "end": 545
                  }
                ],
                "start": 525,
                "end": 545
              },
              "start": 523,
              "end": 545
            },
            "start": 510,
            "end": 545
          },
          "init": null,
          "definite": false,
          "start": 510,
          "end": 545
        }
      ],
      "declare": true,
      "start": 498,
      "end": 546
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
            "name": "differentType",
            "optional": false,
            "typeAnnotation": null,
            "start": 547,
            "end": 560
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null,
            "start": 561,
            "end": 566
          },
          "optional": false,
          "computed": false,
          "start": 547,
          "end": 566
        },
        "right": {
          "type": "Literal",
          "value": 12,
          "raw": "12",
          "start": 569,
          "end": 571
        },
        "start": 547,
        "end": 571
      },
      "directive": null,
      "start": 547,
      "end": 572
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
            "name": "differentName",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Base",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 643,
                      "end": 647
                    },
                    "typeArguments": null,
                    "start": 643,
                    "end": 647
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "DifferentName",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 650,
                      "end": 663
                    },
                    "typeArguments": null,
                    "start": 650,
                    "end": 663
                  }
                ],
                "start": 643,
                "end": 663
              },
              "start": 641,
              "end": 663
            },
            "start": 628,
            "end": 663
          },
          "init": null,
          "definite": false,
          "start": 628,
          "end": 663
        }
      ],
      "declare": true,
      "start": 616,
      "end": 664
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
            "name": "differentName",
            "optional": false,
            "typeAnnotation": null,
            "start": 665,
            "end": 678
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null,
            "start": 679,
            "end": 684
          },
          "optional": false,
          "computed": false,
          "start": 665,
          "end": 684
        },
        "right": {
          "type": "Literal",
          "value": 12,
          "raw": "12",
          "start": 687,
          "end": 689
        },
        "start": 665,
        "end": 689
      },
      "directive": null,
      "start": 665,
      "end": 690
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 731
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
    "value": "Base",
    "start": 10,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 15,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 21,
    "end": 29
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 30,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 35,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 37,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 43,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 45,
    "end": 46
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 47,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "Identical",
    "start": 57,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 67,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 73,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 82,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 87,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 89,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 97,
    "end": 98
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 99,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "Mutable",
    "start": 109,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 117,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 123,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 128,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 130,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 138,
    "end": 139
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 140,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "DifferentType",
    "start": 150,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 164,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 170,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 179,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 184,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 186,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 192,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 194,
    "end": 195
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 196,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "DifferentName",
    "start": 206,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 220,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 226,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "other",
    "start": 235,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 240,
    "end": 241
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 242,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 248,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 250,
    "end": 251
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 252,
    "end": 259
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 260,
    "end": 263
  },
  {
    "type": "Identifier",
    "value": "base",
    "start": 264,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 268,
    "end": 269
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 270,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 274,
    "end": 275
  },
  {
    "type": "Identifier",
    "value": "base",
    "start": 276,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 280,
    "end": 281
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 281,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 287,
    "end": 288
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 289,
    "end": 291
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 335,
    "end": 342
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 343,
    "end": 346
  },
  {
    "type": "Identifier",
    "value": "identical",
    "start": 347,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 356,
    "end": 357
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 358,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 363,
    "end": 364
  },
  {
    "type": "Identifier",
    "value": "Identical",
    "start": 365,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 374,
    "end": 375
  },
  {
    "type": "Identifier",
    "value": "identical",
    "start": 376,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 385,
    "end": 386
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 386,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 392,
    "end": 393
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 394,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 396,
    "end": 397
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 441,
    "end": 448
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 449,
    "end": 452
  },
  {
    "type": "Identifier",
    "value": "mutable",
    "start": 453,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 460,
    "end": 461
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 462,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 467,
    "end": 468
  },
  {
    "type": "Identifier",
    "value": "Mutable",
    "start": 469,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 476,
    "end": 477
  },
  {
    "type": "Identifier",
    "value": "mutable",
    "start": 478,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 485,
    "end": 486
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 486,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 492,
    "end": 493
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 494,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 496,
    "end": 497
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 498,
    "end": 505
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 506,
    "end": 509
  },
  {
    "type": "Identifier",
    "value": "differentType",
    "start": 510,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 523,
    "end": 524
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 525,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 530,
    "end": 531
  },
  {
    "type": "Identifier",
    "value": "DifferentType",
    "start": 532,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 545,
    "end": 546
  },
  {
    "type": "Identifier",
    "value": "differentType",
    "start": 547,
    "end": 560
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 560,
    "end": 561
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 561,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 567,
    "end": 568
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 569,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 571,
    "end": 572
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 616,
    "end": 623
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 624,
    "end": 627
  },
  {
    "type": "Identifier",
    "value": "differentName",
    "start": 628,
    "end": 641
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 641,
    "end": 642
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 643,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 648,
    "end": 649
  },
  {
    "type": "Identifier",
    "value": "DifferentName",
    "start": 650,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 663,
    "end": 664
  },
  {
    "type": "Identifier",
    "value": "differentName",
    "start": 665,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 678,
    "end": 679
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 679,
    "end": 684
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 685,
    "end": 686
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 687,
    "end": 689
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 689,
    "end": 690
  }
]
```
