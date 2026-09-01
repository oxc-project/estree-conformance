__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 11,
                "end": 14
              },
              "start": 9,
              "end": 14
            },
            "start": 6,
            "end": 14
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 17,
            "end": 19
          },
          "definite": false,
          "start": 6,
          "end": 19
        }
      ],
      "declare": false,
      "start": 0,
      "end": 20
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 36,
            "end": 39
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 40,
            "end": 41
          },
          "optional": false,
          "computed": false,
          "start": 36,
          "end": 41
        },
        "right": {
          "type": "ClassExpression",
          "decorators": [],
          "id": null,
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "body": [
              {
                "type": "MethodDefinition",
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 56,
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
                    "body": [],
                    "start": 71,
                    "end": 73
                  },
                  "expression": false,
                  "start": 68,
                  "end": 73
                },
                "kind": "constructor",
                "computed": false,
                "static": false,
                "override": false,
                "optional": false,
                "accessibility": null,
                "start": 56,
                "end": 73
              }
            ],
            "start": 50,
            "end": 75
          },
          "abstract": false,
          "declare": false,
          "start": 44,
          "end": 75
        },
        "start": 36,
        "end": 75
      },
      "directive": null,
      "start": 36,
      "end": 75
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 76,
            "end": 79
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 80,
            "end": 81
          },
          "optional": false,
          "computed": false,
          "start": 76,
          "end": 81
        },
        "right": {
          "type": "ClassExpression",
          "decorators": [],
          "id": null,
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "body": [
              {
                "type": "MethodDefinition",
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 96,
                  "end": 107
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
                    "start": 111,
                    "end": 113
                  },
                  "expression": false,
                  "start": 108,
                  "end": 113
                },
                "kind": "constructor",
                "computed": false,
                "static": false,
                "override": false,
                "optional": false,
                "accessibility": null,
                "start": 96,
                "end": 113
              }
            ],
            "start": 90,
            "end": 115
          },
          "abstract": false,
          "declare": false,
          "start": 84,
          "end": 115
        },
        "start": 76,
        "end": 115
      },
      "directive": null,
      "start": 76,
      "end": 115
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 129,
            "end": 132
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "break",
            "optional": false,
            "typeAnnotation": null,
            "start": 133,
            "end": 138
          },
          "optional": false,
          "computed": false,
          "start": 129,
          "end": 138
        },
        "right": {
          "type": "ClassExpression",
          "decorators": [],
          "id": null,
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "body": [
              {
                "type": "MethodDefinition",
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 153,
                  "end": 164
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
                    "start": 168,
                    "end": 170
                  },
                  "expression": false,
                  "start": 165,
                  "end": 170
                },
                "kind": "constructor",
                "computed": false,
                "static": false,
                "override": false,
                "optional": false,
                "accessibility": null,
                "start": 153,
                "end": 170
              }
            ],
            "start": 147,
            "end": 172
          },
          "abstract": false,
          "declare": false,
          "start": 141,
          "end": 172
        },
        "start": 129,
        "end": 172
      },
      "directive": null,
      "start": 129,
      "end": 172
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 173,
            "end": 176
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "case",
            "optional": false,
            "typeAnnotation": null,
            "start": 177,
            "end": 181
          },
          "optional": false,
          "computed": false,
          "start": 173,
          "end": 181
        },
        "right": {
          "type": "ClassExpression",
          "decorators": [],
          "id": null,
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "body": [
              {
                "type": "MethodDefinition",
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 196,
                  "end": 207
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
                    "start": 211,
                    "end": 213
                  },
                  "expression": false,
                  "start": 208,
                  "end": 213
                },
                "kind": "constructor",
                "computed": false,
                "static": false,
                "override": false,
                "optional": false,
                "accessibility": null,
                "start": 196,
                "end": 213
              }
            ],
            "start": 190,
            "end": 215
          },
          "abstract": false,
          "declare": false,
          "start": 184,
          "end": 215
        },
        "start": 173,
        "end": 215
      },
      "directive": null,
      "start": 173,
      "end": 215
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 216,
            "end": 219
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "catch",
            "optional": false,
            "typeAnnotation": null,
            "start": 220,
            "end": 225
          },
          "optional": false,
          "computed": false,
          "start": 216,
          "end": 225
        },
        "right": {
          "type": "ClassExpression",
          "decorators": [],
          "id": null,
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "body": [
              {
                "type": "MethodDefinition",
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 240,
                  "end": 251
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
                    "start": 255,
                    "end": 257
                  },
                  "expression": false,
                  "start": 252,
                  "end": 257
                },
                "kind": "constructor",
                "computed": false,
                "static": false,
                "override": false,
                "optional": false,
                "accessibility": null,
                "start": 240,
                "end": 257
              }
            ],
            "start": 234,
            "end": 259
          },
          "abstract": false,
          "declare": false,
          "start": 228,
          "end": 259
        },
        "start": 216,
        "end": 259
      },
      "directive": null,
      "start": 216,
      "end": 259
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 260,
            "end": 263
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "class",
            "optional": false,
            "typeAnnotation": null,
            "start": 264,
            "end": 269
          },
          "optional": false,
          "computed": false,
          "start": 260,
          "end": 269
        },
        "right": {
          "type": "ClassExpression",
          "decorators": [],
          "id": null,
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "body": [
              {
                "type": "MethodDefinition",
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 284,
                  "end": 295
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
                    "start": 299,
                    "end": 301
                  },
                  "expression": false,
                  "start": 296,
                  "end": 301
                },
                "kind": "constructor",
                "computed": false,
                "static": false,
                "override": false,
                "optional": false,
                "accessibility": null,
                "start": 284,
                "end": 301
              }
            ],
            "start": 278,
            "end": 303
          },
          "abstract": false,
          "declare": false,
          "start": 272,
          "end": 303
        },
        "start": 260,
        "end": 303
      },
      "directive": null,
      "start": 260,
      "end": 303
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 304,
            "end": 307
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "const",
            "optional": false,
            "typeAnnotation": null,
            "start": 308,
            "end": 313
          },
          "optional": false,
          "computed": false,
          "start": 304,
          "end": 313
        },
        "right": {
          "type": "ClassExpression",
          "decorators": [],
          "id": null,
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "body": [
              {
                "type": "MethodDefinition",
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 328,
                  "end": 339
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
                    "start": 343,
                    "end": 345
                  },
                  "expression": false,
                  "start": 340,
                  "end": 345
                },
                "kind": "constructor",
                "computed": false,
                "static": false,
                "override": false,
                "optional": false,
                "accessibility": null,
                "start": 328,
                "end": 345
              }
            ],
            "start": 322,
            "end": 347
          },
          "abstract": false,
          "declare": false,
          "start": 316,
          "end": 347
        },
        "start": 304,
        "end": 347
      },
      "directive": null,
      "start": 304,
      "end": 347
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 348,
            "end": 351
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "continue",
            "optional": false,
            "typeAnnotation": null,
            "start": 352,
            "end": 360
          },
          "optional": false,
          "computed": false,
          "start": 348,
          "end": 360
        },
        "right": {
          "type": "ClassExpression",
          "decorators": [],
          "id": null,
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "body": [
              {
                "type": "MethodDefinition",
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 375,
                  "end": 386
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
                    "start": 390,
                    "end": 392
                  },
                  "expression": false,
                  "start": 387,
                  "end": 392
                },
                "kind": "constructor",
                "computed": false,
                "static": false,
                "override": false,
                "optional": false,
                "accessibility": null,
                "start": 375,
                "end": 392
              }
            ],
            "start": 369,
            "end": 394
          },
          "abstract": false,
          "declare": false,
          "start": 363,
          "end": 394
        },
        "start": 348,
        "end": 394
      },
      "directive": null,
      "start": 348,
      "end": 394
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 395,
            "end": 398
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "debugger",
            "optional": false,
            "typeAnnotation": null,
            "start": 399,
            "end": 407
          },
          "optional": false,
          "computed": false,
          "start": 395,
          "end": 407
        },
        "right": {
          "type": "ClassExpression",
          "decorators": [],
          "id": null,
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "body": [
              {
                "type": "MethodDefinition",
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 422,
                  "end": 433
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
                    "start": 437,
                    "end": 439
                  },
                  "expression": false,
                  "start": 434,
                  "end": 439
                },
                "kind": "constructor",
                "computed": false,
                "static": false,
                "override": false,
                "optional": false,
                "accessibility": null,
                "start": 422,
                "end": 439
              }
            ],
            "start": 416,
            "end": 441
          },
          "abstract": false,
          "declare": false,
          "start": 410,
          "end": 441
        },
        "start": 395,
        "end": 441
      },
      "directive": null,
      "start": 395,
      "end": 441
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 442,
            "end": 445
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "default",
            "optional": false,
            "typeAnnotation": null,
            "start": 446,
            "end": 453
          },
          "optional": false,
          "computed": false,
          "start": 442,
          "end": 453
        },
        "right": {
          "type": "ClassExpression",
          "decorators": [],
          "id": null,
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "body": [
              {
                "type": "MethodDefinition",
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 468,
                  "end": 479
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
                    "start": 483,
                    "end": 485
                  },
                  "expression": false,
                  "start": 480,
                  "end": 485
                },
                "kind": "constructor",
                "computed": false,
                "static": false,
                "override": false,
                "optional": false,
                "accessibility": null,
                "start": 468,
                "end": 485
              }
            ],
            "start": 462,
            "end": 487
          },
          "abstract": false,
          "declare": false,
          "start": 456,
          "end": 487
        },
        "start": 442,
        "end": 487
      },
      "directive": null,
      "start": 442,
      "end": 487
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 488,
            "end": 491
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "delete",
            "optional": false,
            "typeAnnotation": null,
            "start": 492,
            "end": 498
          },
          "optional": false,
          "computed": false,
          "start": 488,
          "end": 498
        },
        "right": {
          "type": "ClassExpression",
          "decorators": [],
          "id": null,
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "body": [
              {
                "type": "MethodDefinition",
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 513,
                  "end": 524
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
                    "start": 528,
                    "end": 530
                  },
                  "expression": false,
                  "start": 525,
                  "end": 530
                },
                "kind": "constructor",
                "computed": false,
                "static": false,
                "override": false,
                "optional": false,
                "accessibility": null,
                "start": 513,
                "end": 530
              }
            ],
            "start": 507,
            "end": 532
          },
          "abstract": false,
          "declare": false,
          "start": 501,
          "end": 532
        },
        "start": 488,
        "end": 532
      },
      "directive": null,
      "start": 488,
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 533,
            "end": 536
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "do",
            "optional": false,
            "typeAnnotation": null,
            "start": 537,
            "end": 539
          },
          "optional": false,
          "computed": false,
          "start": 533,
          "end": 539
        },
        "right": {
          "type": "ClassExpression",
          "decorators": [],
          "id": null,
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "body": [
              {
                "type": "MethodDefinition",
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 554,
                  "end": 565
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
                    "start": 569,
                    "end": 571
                  },
                  "expression": false,
                  "start": 566,
                  "end": 571
                },
                "kind": "constructor",
                "computed": false,
                "static": false,
                "override": false,
                "optional": false,
                "accessibility": null,
                "start": 554,
                "end": 571
              }
            ],
            "start": 548,
            "end": 573
          },
          "abstract": false,
          "declare": false,
          "start": 542,
          "end": 573
        },
        "start": 533,
        "end": 573
      },
      "directive": null,
      "start": 533,
      "end": 573
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 574,
            "end": 577
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "else",
            "optional": false,
            "typeAnnotation": null,
            "start": 578,
            "end": 582
          },
          "optional": false,
          "computed": false,
          "start": 574,
          "end": 582
        },
        "right": {
          "type": "ClassExpression",
          "decorators": [],
          "id": null,
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "body": [
              {
                "type": "MethodDefinition",
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 597,
                  "end": 608
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
                    "start": 612,
                    "end": 614
                  },
                  "expression": false,
                  "start": 609,
                  "end": 614
                },
                "kind": "constructor",
                "computed": false,
                "static": false,
                "override": false,
                "optional": false,
                "accessibility": null,
                "start": 597,
                "end": 614
              }
            ],
            "start": 591,
            "end": 616
          },
          "abstract": false,
          "declare": false,
          "start": 585,
          "end": 616
        },
        "start": 574,
        "end": 616
      },
      "directive": null,
      "start": 574,
      "end": 616
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 617,
            "end": 620
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "enum",
            "optional": false,
            "typeAnnotation": null,
            "start": 621,
            "end": 625
          },
          "optional": false,
          "computed": false,
          "start": 617,
          "end": 625
        },
        "right": {
          "type": "ClassExpression",
          "decorators": [],
          "id": null,
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "body": [
              {
                "type": "MethodDefinition",
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 640,
                  "end": 651
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
                    "start": 655,
                    "end": 657
                  },
                  "expression": false,
                  "start": 652,
                  "end": 657
                },
                "kind": "constructor",
                "computed": false,
                "static": false,
                "override": false,
                "optional": false,
                "accessibility": null,
                "start": 640,
                "end": 657
              }
            ],
            "start": 634,
            "end": 659
          },
          "abstract": false,
          "declare": false,
          "start": 628,
          "end": 659
        },
        "start": 617,
        "end": 659
      },
      "directive": null,
      "start": 617,
      "end": 659
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 660,
            "end": 663
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "export",
            "optional": false,
            "typeAnnotation": null,
            "start": 664,
            "end": 670
          },
          "optional": false,
          "computed": false,
          "start": 660,
          "end": 670
        },
        "right": {
          "type": "ClassExpression",
          "decorators": [],
          "id": null,
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "body": [
              {
                "type": "MethodDefinition",
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 685,
                  "end": 696
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
                    "start": 700,
                    "end": 702
                  },
                  "expression": false,
                  "start": 697,
                  "end": 702
                },
                "kind": "constructor",
                "computed": false,
                "static": false,
                "override": false,
                "optional": false,
                "accessibility": null,
                "start": 685,
                "end": 702
              }
            ],
            "start": 679,
            "end": 704
          },
          "abstract": false,
          "declare": false,
          "start": 673,
          "end": 704
        },
        "start": 660,
        "end": 704
      },
      "directive": null,
      "start": 660,
      "end": 704
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 705,
            "end": 708
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "extends",
            "optional": false,
            "typeAnnotation": null,
            "start": 709,
            "end": 716
          },
          "optional": false,
          "computed": false,
          "start": 705,
          "end": 716
        },
        "right": {
          "type": "ClassExpression",
          "decorators": [],
          "id": null,
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "body": [
              {
                "type": "MethodDefinition",
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 731,
                  "end": 742
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
                    "start": 746,
                    "end": 748
                  },
                  "expression": false,
                  "start": 743,
                  "end": 748
                },
                "kind": "constructor",
                "computed": false,
                "static": false,
                "override": false,
                "optional": false,
                "accessibility": null,
                "start": 731,
                "end": 748
              }
            ],
            "start": 725,
            "end": 750
          },
          "abstract": false,
          "declare": false,
          "start": 719,
          "end": 750
        },
        "start": 705,
        "end": 750
      },
      "directive": null,
      "start": 705,
      "end": 750
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 751,
            "end": 754
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "false",
            "optional": false,
            "typeAnnotation": null,
            "start": 755,
            "end": 760
          },
          "optional": false,
          "computed": false,
          "start": 751,
          "end": 760
        },
        "right": {
          "type": "ClassExpression",
          "decorators": [],
          "id": null,
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "body": [
              {
                "type": "MethodDefinition",
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 775,
                  "end": 786
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
                    "start": 790,
                    "end": 792
                  },
                  "expression": false,
                  "start": 787,
                  "end": 792
                },
                "kind": "constructor",
                "computed": false,
                "static": false,
                "override": false,
                "optional": false,
                "accessibility": null,
                "start": 775,
                "end": 792
              }
            ],
            "start": 769,
            "end": 794
          },
          "abstract": false,
          "declare": false,
          "start": 763,
          "end": 794
        },
        "start": 751,
        "end": 794
      },
      "directive": null,
      "start": 751,
      "end": 794
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 795,
            "end": 798
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "finally",
            "optional": false,
            "typeAnnotation": null,
            "start": 799,
            "end": 806
          },
          "optional": false,
          "computed": false,
          "start": 795,
          "end": 806
        },
        "right": {
          "type": "ClassExpression",
          "decorators": [],
          "id": null,
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "body": [
              {
                "type": "MethodDefinition",
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 821,
                  "end": 832
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
                    "start": 836,
                    "end": 838
                  },
                  "expression": false,
                  "start": 833,
                  "end": 838
                },
                "kind": "constructor",
                "computed": false,
                "static": false,
                "override": false,
                "optional": false,
                "accessibility": null,
                "start": 821,
                "end": 838
              }
            ],
            "start": 815,
            "end": 840
          },
          "abstract": false,
          "declare": false,
          "start": 809,
          "end": 840
        },
        "start": 795,
        "end": 840
      },
      "directive": null,
      "start": 795,
      "end": 840
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 841,
            "end": 844
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "for",
            "optional": false,
            "typeAnnotation": null,
            "start": 845,
            "end": 848
          },
          "optional": false,
          "computed": false,
          "start": 841,
          "end": 848
        },
        "right": {
          "type": "ClassExpression",
          "decorators": [],
          "id": null,
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "body": [
              {
                "type": "MethodDefinition",
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 863,
                  "end": 874
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
                    "start": 878,
                    "end": 880
                  },
                  "expression": false,
                  "start": 875,
                  "end": 880
                },
                "kind": "constructor",
                "computed": false,
                "static": false,
                "override": false,
                "optional": false,
                "accessibility": null,
                "start": 863,
                "end": 880
              }
            ],
            "start": 857,
            "end": 882
          },
          "abstract": false,
          "declare": false,
          "start": 851,
          "end": 882
        },
        "start": 841,
        "end": 882
      },
      "directive": null,
      "start": 841,
      "end": 882
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 883,
            "end": 886
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "function",
            "optional": false,
            "typeAnnotation": null,
            "start": 887,
            "end": 895
          },
          "optional": false,
          "computed": false,
          "start": 883,
          "end": 895
        },
        "right": {
          "type": "ClassExpression",
          "decorators": [],
          "id": null,
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "body": [
              {
                "type": "MethodDefinition",
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 910,
                  "end": 921
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
                    "start": 925,
                    "end": 927
                  },
                  "expression": false,
                  "start": 922,
                  "end": 927
                },
                "kind": "constructor",
                "computed": false,
                "static": false,
                "override": false,
                "optional": false,
                "accessibility": null,
                "start": 910,
                "end": 927
              }
            ],
            "start": 904,
            "end": 929
          },
          "abstract": false,
          "declare": false,
          "start": 898,
          "end": 929
        },
        "start": 883,
        "end": 929
      },
      "directive": null,
      "start": 883,
      "end": 929
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 930,
            "end": 933
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "if",
            "optional": false,
            "typeAnnotation": null,
            "start": 934,
            "end": 936
          },
          "optional": false,
          "computed": false,
          "start": 930,
          "end": 936
        },
        "right": {
          "type": "ClassExpression",
          "decorators": [],
          "id": null,
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "body": [
              {
                "type": "MethodDefinition",
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 951,
                  "end": 962
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
                    "start": 966,
                    "end": 968
                  },
                  "expression": false,
                  "start": 963,
                  "end": 968
                },
                "kind": "constructor",
                "computed": false,
                "static": false,
                "override": false,
                "optional": false,
                "accessibility": null,
                "start": 951,
                "end": 968
              }
            ],
            "start": 945,
            "end": 970
          },
          "abstract": false,
          "declare": false,
          "start": 939,
          "end": 970
        },
        "start": 930,
        "end": 970
      },
      "directive": null,
      "start": 930,
      "end": 970
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 971,
            "end": 974
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "import",
            "optional": false,
            "typeAnnotation": null,
            "start": 975,
            "end": 981
          },
          "optional": false,
          "computed": false,
          "start": 971,
          "end": 981
        },
        "right": {
          "type": "ClassExpression",
          "decorators": [],
          "id": null,
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "body": [
              {
                "type": "MethodDefinition",
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 996,
                  "end": 1007
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
                    "start": 1011,
                    "end": 1013
                  },
                  "expression": false,
                  "start": 1008,
                  "end": 1013
                },
                "kind": "constructor",
                "computed": false,
                "static": false,
                "override": false,
                "optional": false,
                "accessibility": null,
                "start": 996,
                "end": 1013
              }
            ],
            "start": 990,
            "end": 1015
          },
          "abstract": false,
          "declare": false,
          "start": 984,
          "end": 1015
        },
        "start": 971,
        "end": 1015
      },
      "directive": null,
      "start": 971,
      "end": 1015
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 1016,
            "end": 1019
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "in",
            "optional": false,
            "typeAnnotation": null,
            "start": 1020,
            "end": 1022
          },
          "optional": false,
          "computed": false,
          "start": 1016,
          "end": 1022
        },
        "right": {
          "type": "ClassExpression",
          "decorators": [],
          "id": null,
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "body": [
              {
                "type": "MethodDefinition",
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1037,
                  "end": 1048
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
                    "start": 1052,
                    "end": 1054
                  },
                  "expression": false,
                  "start": 1049,
                  "end": 1054
                },
                "kind": "constructor",
                "computed": false,
                "static": false,
                "override": false,
                "optional": false,
                "accessibility": null,
                "start": 1037,
                "end": 1054
              }
            ],
            "start": 1031,
            "end": 1056
          },
          "abstract": false,
          "declare": false,
          "start": 1025,
          "end": 1056
        },
        "start": 1016,
        "end": 1056
      },
      "directive": null,
      "start": 1016,
      "end": 1056
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 1057,
            "end": 1060
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "instanceof",
            "optional": false,
            "typeAnnotation": null,
            "start": 1061,
            "end": 1071
          },
          "optional": false,
          "computed": false,
          "start": 1057,
          "end": 1071
        },
        "right": {
          "type": "ClassExpression",
          "decorators": [],
          "id": null,
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "body": [
              {
                "type": "MethodDefinition",
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1086,
                  "end": 1097
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
                    "start": 1101,
                    "end": 1103
                  },
                  "expression": false,
                  "start": 1098,
                  "end": 1103
                },
                "kind": "constructor",
                "computed": false,
                "static": false,
                "override": false,
                "optional": false,
                "accessibility": null,
                "start": 1086,
                "end": 1103
              }
            ],
            "start": 1080,
            "end": 1105
          },
          "abstract": false,
          "declare": false,
          "start": 1074,
          "end": 1105
        },
        "start": 1057,
        "end": 1105
      },
      "directive": null,
      "start": 1057,
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 1106,
            "end": 1109
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "new",
            "optional": false,
            "typeAnnotation": null,
            "start": 1110,
            "end": 1113
          },
          "optional": false,
          "computed": false,
          "start": 1106,
          "end": 1113
        },
        "right": {
          "type": "ClassExpression",
          "decorators": [],
          "id": null,
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "body": [
              {
                "type": "MethodDefinition",
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1128,
                  "end": 1139
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
                    "start": 1143,
                    "end": 1145
                  },
                  "expression": false,
                  "start": 1140,
                  "end": 1145
                },
                "kind": "constructor",
                "computed": false,
                "static": false,
                "override": false,
                "optional": false,
                "accessibility": null,
                "start": 1128,
                "end": 1145
              }
            ],
            "start": 1122,
            "end": 1147
          },
          "abstract": false,
          "declare": false,
          "start": 1116,
          "end": 1147
        },
        "start": 1106,
        "end": 1147
      },
      "directive": null,
      "start": 1106,
      "end": 1147
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 1148,
            "end": 1151
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "null",
            "optional": false,
            "typeAnnotation": null,
            "start": 1152,
            "end": 1156
          },
          "optional": false,
          "computed": false,
          "start": 1148,
          "end": 1156
        },
        "right": {
          "type": "ClassExpression",
          "decorators": [],
          "id": null,
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "body": [
              {
                "type": "MethodDefinition",
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1171,
                  "end": 1182
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
                    "start": 1186,
                    "end": 1188
                  },
                  "expression": false,
                  "start": 1183,
                  "end": 1188
                },
                "kind": "constructor",
                "computed": false,
                "static": false,
                "override": false,
                "optional": false,
                "accessibility": null,
                "start": 1171,
                "end": 1188
              }
            ],
            "start": 1165,
            "end": 1190
          },
          "abstract": false,
          "declare": false,
          "start": 1159,
          "end": 1190
        },
        "start": 1148,
        "end": 1190
      },
      "directive": null,
      "start": 1148,
      "end": 1190
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 1191,
            "end": 1194
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "return",
            "optional": false,
            "typeAnnotation": null,
            "start": 1195,
            "end": 1201
          },
          "optional": false,
          "computed": false,
          "start": 1191,
          "end": 1201
        },
        "right": {
          "type": "ClassExpression",
          "decorators": [],
          "id": null,
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "body": [
              {
                "type": "MethodDefinition",
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1216,
                  "end": 1227
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
                    "start": 1231,
                    "end": 1233
                  },
                  "expression": false,
                  "start": 1228,
                  "end": 1233
                },
                "kind": "constructor",
                "computed": false,
                "static": false,
                "override": false,
                "optional": false,
                "accessibility": null,
                "start": 1216,
                "end": 1233
              }
            ],
            "start": 1210,
            "end": 1235
          },
          "abstract": false,
          "declare": false,
          "start": 1204,
          "end": 1235
        },
        "start": 1191,
        "end": 1235
      },
      "directive": null,
      "start": 1191,
      "end": 1235
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 1236,
            "end": 1239
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "super",
            "optional": false,
            "typeAnnotation": null,
            "start": 1240,
            "end": 1245
          },
          "optional": false,
          "computed": false,
          "start": 1236,
          "end": 1245
        },
        "right": {
          "type": "ClassExpression",
          "decorators": [],
          "id": null,
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "body": [
              {
                "type": "MethodDefinition",
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1260,
                  "end": 1271
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
                    "start": 1275,
                    "end": 1277
                  },
                  "expression": false,
                  "start": 1272,
                  "end": 1277
                },
                "kind": "constructor",
                "computed": false,
                "static": false,
                "override": false,
                "optional": false,
                "accessibility": null,
                "start": 1260,
                "end": 1277
              }
            ],
            "start": 1254,
            "end": 1279
          },
          "abstract": false,
          "declare": false,
          "start": 1248,
          "end": 1279
        },
        "start": 1236,
        "end": 1279
      },
      "directive": null,
      "start": 1236,
      "end": 1279
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 1280,
            "end": 1283
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "switch",
            "optional": false,
            "typeAnnotation": null,
            "start": 1284,
            "end": 1290
          },
          "optional": false,
          "computed": false,
          "start": 1280,
          "end": 1290
        },
        "right": {
          "type": "ClassExpression",
          "decorators": [],
          "id": null,
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "body": [
              {
                "type": "MethodDefinition",
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1305,
                  "end": 1316
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
                    "start": 1320,
                    "end": 1322
                  },
                  "expression": false,
                  "start": 1317,
                  "end": 1322
                },
                "kind": "constructor",
                "computed": false,
                "static": false,
                "override": false,
                "optional": false,
                "accessibility": null,
                "start": 1305,
                "end": 1322
              }
            ],
            "start": 1299,
            "end": 1324
          },
          "abstract": false,
          "declare": false,
          "start": 1293,
          "end": 1324
        },
        "start": 1280,
        "end": 1324
      },
      "directive": null,
      "start": 1280,
      "end": 1324
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 1325,
            "end": 1328
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "this",
            "optional": false,
            "typeAnnotation": null,
            "start": 1329,
            "end": 1333
          },
          "optional": false,
          "computed": false,
          "start": 1325,
          "end": 1333
        },
        "right": {
          "type": "ClassExpression",
          "decorators": [],
          "id": null,
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "body": [
              {
                "type": "MethodDefinition",
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1348,
                  "end": 1359
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
                    "start": 1363,
                    "end": 1365
                  },
                  "expression": false,
                  "start": 1360,
                  "end": 1365
                },
                "kind": "constructor",
                "computed": false,
                "static": false,
                "override": false,
                "optional": false,
                "accessibility": null,
                "start": 1348,
                "end": 1365
              }
            ],
            "start": 1342,
            "end": 1367
          },
          "abstract": false,
          "declare": false,
          "start": 1336,
          "end": 1367
        },
        "start": 1325,
        "end": 1367
      },
      "directive": null,
      "start": 1325,
      "end": 1367
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 1368,
            "end": 1371
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "throw",
            "optional": false,
            "typeAnnotation": null,
            "start": 1372,
            "end": 1377
          },
          "optional": false,
          "computed": false,
          "start": 1368,
          "end": 1377
        },
        "right": {
          "type": "ClassExpression",
          "decorators": [],
          "id": null,
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "body": [
              {
                "type": "MethodDefinition",
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1392,
                  "end": 1403
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
                    "start": 1407,
                    "end": 1409
                  },
                  "expression": false,
                  "start": 1404,
                  "end": 1409
                },
                "kind": "constructor",
                "computed": false,
                "static": false,
                "override": false,
                "optional": false,
                "accessibility": null,
                "start": 1392,
                "end": 1409
              }
            ],
            "start": 1386,
            "end": 1411
          },
          "abstract": false,
          "declare": false,
          "start": 1380,
          "end": 1411
        },
        "start": 1368,
        "end": 1411
      },
      "directive": null,
      "start": 1368,
      "end": 1411
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 1412,
            "end": 1415
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "true",
            "optional": false,
            "typeAnnotation": null,
            "start": 1416,
            "end": 1420
          },
          "optional": false,
          "computed": false,
          "start": 1412,
          "end": 1420
        },
        "right": {
          "type": "ClassExpression",
          "decorators": [],
          "id": null,
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "body": [
              {
                "type": "MethodDefinition",
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1435,
                  "end": 1446
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
                    "start": 1450,
                    "end": 1452
                  },
                  "expression": false,
                  "start": 1447,
                  "end": 1452
                },
                "kind": "constructor",
                "computed": false,
                "static": false,
                "override": false,
                "optional": false,
                "accessibility": null,
                "start": 1435,
                "end": 1452
              }
            ],
            "start": 1429,
            "end": 1454
          },
          "abstract": false,
          "declare": false,
          "start": 1423,
          "end": 1454
        },
        "start": 1412,
        "end": 1454
      },
      "directive": null,
      "start": 1412,
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 1455,
            "end": 1458
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "try",
            "optional": false,
            "typeAnnotation": null,
            "start": 1459,
            "end": 1462
          },
          "optional": false,
          "computed": false,
          "start": 1455,
          "end": 1462
        },
        "right": {
          "type": "ClassExpression",
          "decorators": [],
          "id": null,
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "body": [
              {
                "type": "MethodDefinition",
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1477,
                  "end": 1488
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
                    "start": 1492,
                    "end": 1494
                  },
                  "expression": false,
                  "start": 1489,
                  "end": 1494
                },
                "kind": "constructor",
                "computed": false,
                "static": false,
                "override": false,
                "optional": false,
                "accessibility": null,
                "start": 1477,
                "end": 1494
              }
            ],
            "start": 1471,
            "end": 1496
          },
          "abstract": false,
          "declare": false,
          "start": 1465,
          "end": 1496
        },
        "start": 1455,
        "end": 1496
      },
      "directive": null,
      "start": 1455,
      "end": 1496
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 1497,
            "end": 1500
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "typeof",
            "optional": false,
            "typeAnnotation": null,
            "start": 1501,
            "end": 1507
          },
          "optional": false,
          "computed": false,
          "start": 1497,
          "end": 1507
        },
        "right": {
          "type": "ClassExpression",
          "decorators": [],
          "id": null,
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "body": [
              {
                "type": "MethodDefinition",
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1522,
                  "end": 1533
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
                    "start": 1537,
                    "end": 1539
                  },
                  "expression": false,
                  "start": 1534,
                  "end": 1539
                },
                "kind": "constructor",
                "computed": false,
                "static": false,
                "override": false,
                "optional": false,
                "accessibility": null,
                "start": 1522,
                "end": 1539
              }
            ],
            "start": 1516,
            "end": 1541
          },
          "abstract": false,
          "declare": false,
          "start": 1510,
          "end": 1541
        },
        "start": 1497,
        "end": 1541
      },
      "directive": null,
      "start": 1497,
      "end": 1541
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 1542,
            "end": 1545
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "var",
            "optional": false,
            "typeAnnotation": null,
            "start": 1546,
            "end": 1549
          },
          "optional": false,
          "computed": false,
          "start": 1542,
          "end": 1549
        },
        "right": {
          "type": "ClassExpression",
          "decorators": [],
          "id": null,
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "body": [
              {
                "type": "MethodDefinition",
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1564,
                  "end": 1575
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
                    "start": 1579,
                    "end": 1581
                  },
                  "expression": false,
                  "start": 1576,
                  "end": 1581
                },
                "kind": "constructor",
                "computed": false,
                "static": false,
                "override": false,
                "optional": false,
                "accessibility": null,
                "start": 1564,
                "end": 1581
              }
            ],
            "start": 1558,
            "end": 1583
          },
          "abstract": false,
          "declare": false,
          "start": 1552,
          "end": 1583
        },
        "start": 1542,
        "end": 1583
      },
      "directive": null,
      "start": 1542,
      "end": 1583
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 1584,
            "end": 1587
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "void",
            "optional": false,
            "typeAnnotation": null,
            "start": 1588,
            "end": 1592
          },
          "optional": false,
          "computed": false,
          "start": 1584,
          "end": 1592
        },
        "right": {
          "type": "ClassExpression",
          "decorators": [],
          "id": null,
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "body": [
              {
                "type": "MethodDefinition",
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1607,
                  "end": 1618
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
                    "start": 1622,
                    "end": 1624
                  },
                  "expression": false,
                  "start": 1619,
                  "end": 1624
                },
                "kind": "constructor",
                "computed": false,
                "static": false,
                "override": false,
                "optional": false,
                "accessibility": null,
                "start": 1607,
                "end": 1624
              }
            ],
            "start": 1601,
            "end": 1626
          },
          "abstract": false,
          "declare": false,
          "start": 1595,
          "end": 1626
        },
        "start": 1584,
        "end": 1626
      },
      "directive": null,
      "start": 1584,
      "end": 1626
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 1627,
            "end": 1630
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "while",
            "optional": false,
            "typeAnnotation": null,
            "start": 1631,
            "end": 1636
          },
          "optional": false,
          "computed": false,
          "start": 1627,
          "end": 1636
        },
        "right": {
          "type": "ClassExpression",
          "decorators": [],
          "id": null,
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "body": [
              {
                "type": "MethodDefinition",
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1651,
                  "end": 1662
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
                    "start": 1666,
                    "end": 1668
                  },
                  "expression": false,
                  "start": 1663,
                  "end": 1668
                },
                "kind": "constructor",
                "computed": false,
                "static": false,
                "override": false,
                "optional": false,
                "accessibility": null,
                "start": 1651,
                "end": 1668
              }
            ],
            "start": 1645,
            "end": 1670
          },
          "abstract": false,
          "declare": false,
          "start": 1639,
          "end": 1670
        },
        "start": 1627,
        "end": 1670
      },
      "directive": null,
      "start": 1627,
      "end": 1670
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 1671,
            "end": 1674
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "with",
            "optional": false,
            "typeAnnotation": null,
            "start": 1675,
            "end": 1679
          },
          "optional": false,
          "computed": false,
          "start": 1671,
          "end": 1679
        },
        "right": {
          "type": "ClassExpression",
          "decorators": [],
          "id": null,
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "body": [
              {
                "type": "MethodDefinition",
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1694,
                  "end": 1705
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
                    "start": 1709,
                    "end": 1711
                  },
                  "expression": false,
                  "start": 1706,
                  "end": 1711
                },
                "kind": "constructor",
                "computed": false,
                "static": false,
                "override": false,
                "optional": false,
                "accessibility": null,
                "start": 1694,
                "end": 1711
              }
            ],
            "start": 1688,
            "end": 1713
          },
          "abstract": false,
          "declare": false,
          "start": 1682,
          "end": 1713
        },
        "start": 1671,
        "end": 1713
      },
      "directive": null,
      "start": 1671,
      "end": 1713
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 1714,
            "end": 1717
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "implements",
            "optional": false,
            "typeAnnotation": null,
            "start": 1718,
            "end": 1728
          },
          "optional": false,
          "computed": false,
          "start": 1714,
          "end": 1728
        },
        "right": {
          "type": "ClassExpression",
          "decorators": [],
          "id": null,
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "body": [
              {
                "type": "MethodDefinition",
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1743,
                  "end": 1754
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
                    "start": 1758,
                    "end": 1760
                  },
                  "expression": false,
                  "start": 1755,
                  "end": 1760
                },
                "kind": "constructor",
                "computed": false,
                "static": false,
                "override": false,
                "optional": false,
                "accessibility": null,
                "start": 1743,
                "end": 1760
              }
            ],
            "start": 1737,
            "end": 1762
          },
          "abstract": false,
          "declare": false,
          "start": 1731,
          "end": 1762
        },
        "start": 1714,
        "end": 1762
      },
      "directive": null,
      "start": 1714,
      "end": 1762
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 1763,
            "end": 1766
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "interface",
            "optional": false,
            "typeAnnotation": null,
            "start": 1767,
            "end": 1776
          },
          "optional": false,
          "computed": false,
          "start": 1763,
          "end": 1776
        },
        "right": {
          "type": "ClassExpression",
          "decorators": [],
          "id": null,
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "body": [
              {
                "type": "MethodDefinition",
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1791,
                  "end": 1802
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
                    "start": 1806,
                    "end": 1808
                  },
                  "expression": false,
                  "start": 1803,
                  "end": 1808
                },
                "kind": "constructor",
                "computed": false,
                "static": false,
                "override": false,
                "optional": false,
                "accessibility": null,
                "start": 1791,
                "end": 1808
              }
            ],
            "start": 1785,
            "end": 1810
          },
          "abstract": false,
          "declare": false,
          "start": 1779,
          "end": 1810
        },
        "start": 1763,
        "end": 1810
      },
      "directive": null,
      "start": 1763,
      "end": 1810
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 1811,
            "end": 1814
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "let",
            "optional": false,
            "typeAnnotation": null,
            "start": 1815,
            "end": 1818
          },
          "optional": false,
          "computed": false,
          "start": 1811,
          "end": 1818
        },
        "right": {
          "type": "ClassExpression",
          "decorators": [],
          "id": null,
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "body": [
              {
                "type": "MethodDefinition",
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1833,
                  "end": 1844
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
                    "start": 1848,
                    "end": 1850
                  },
                  "expression": false,
                  "start": 1845,
                  "end": 1850
                },
                "kind": "constructor",
                "computed": false,
                "static": false,
                "override": false,
                "optional": false,
                "accessibility": null,
                "start": 1833,
                "end": 1850
              }
            ],
            "start": 1827,
            "end": 1852
          },
          "abstract": false,
          "declare": false,
          "start": 1821,
          "end": 1852
        },
        "start": 1811,
        "end": 1852
      },
      "directive": null,
      "start": 1811,
      "end": 1852
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 1853,
            "end": 1856
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "package",
            "optional": false,
            "typeAnnotation": null,
            "start": 1857,
            "end": 1864
          },
          "optional": false,
          "computed": false,
          "start": 1853,
          "end": 1864
        },
        "right": {
          "type": "ClassExpression",
          "decorators": [],
          "id": null,
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "body": [
              {
                "type": "MethodDefinition",
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1879,
                  "end": 1890
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
                    "start": 1894,
                    "end": 1896
                  },
                  "expression": false,
                  "start": 1891,
                  "end": 1896
                },
                "kind": "constructor",
                "computed": false,
                "static": false,
                "override": false,
                "optional": false,
                "accessibility": null,
                "start": 1879,
                "end": 1896
              }
            ],
            "start": 1873,
            "end": 1898
          },
          "abstract": false,
          "declare": false,
          "start": 1867,
          "end": 1898
        },
        "start": 1853,
        "end": 1898
      },
      "directive": null,
      "start": 1853,
      "end": 1898
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 1899,
            "end": 1902
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "private",
            "optional": false,
            "typeAnnotation": null,
            "start": 1903,
            "end": 1910
          },
          "optional": false,
          "computed": false,
          "start": 1899,
          "end": 1910
        },
        "right": {
          "type": "ClassExpression",
          "decorators": [],
          "id": null,
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "body": [
              {
                "type": "MethodDefinition",
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1925,
                  "end": 1936
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
                    "start": 1940,
                    "end": 1942
                  },
                  "expression": false,
                  "start": 1937,
                  "end": 1942
                },
                "kind": "constructor",
                "computed": false,
                "static": false,
                "override": false,
                "optional": false,
                "accessibility": null,
                "start": 1925,
                "end": 1942
              }
            ],
            "start": 1919,
            "end": 1944
          },
          "abstract": false,
          "declare": false,
          "start": 1913,
          "end": 1944
        },
        "start": 1899,
        "end": 1944
      },
      "directive": null,
      "start": 1899,
      "end": 1944
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 1945,
            "end": 1948
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "protected",
            "optional": false,
            "typeAnnotation": null,
            "start": 1949,
            "end": 1958
          },
          "optional": false,
          "computed": false,
          "start": 1945,
          "end": 1958
        },
        "right": {
          "type": "ClassExpression",
          "decorators": [],
          "id": null,
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "body": [
              {
                "type": "MethodDefinition",
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1973,
                  "end": 1984
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
                    "start": 1988,
                    "end": 1990
                  },
                  "expression": false,
                  "start": 1985,
                  "end": 1990
                },
                "kind": "constructor",
                "computed": false,
                "static": false,
                "override": false,
                "optional": false,
                "accessibility": null,
                "start": 1973,
                "end": 1990
              }
            ],
            "start": 1967,
            "end": 1992
          },
          "abstract": false,
          "declare": false,
          "start": 1961,
          "end": 1992
        },
        "start": 1945,
        "end": 1992
      },
      "directive": null,
      "start": 1945,
      "end": 1992
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 1993,
            "end": 1996
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "public",
            "optional": false,
            "typeAnnotation": null,
            "start": 1997,
            "end": 2003
          },
          "optional": false,
          "computed": false,
          "start": 1993,
          "end": 2003
        },
        "right": {
          "type": "ClassExpression",
          "decorators": [],
          "id": null,
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "body": [
              {
                "type": "MethodDefinition",
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2018,
                  "end": 2029
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
                    "start": 2033,
                    "end": 2035
                  },
                  "expression": false,
                  "start": 2030,
                  "end": 2035
                },
                "kind": "constructor",
                "computed": false,
                "static": false,
                "override": false,
                "optional": false,
                "accessibility": null,
                "start": 2018,
                "end": 2035
              }
            ],
            "start": 2012,
            "end": 2037
          },
          "abstract": false,
          "declare": false,
          "start": 2006,
          "end": 2037
        },
        "start": 1993,
        "end": 2037
      },
      "directive": null,
      "start": 1993,
      "end": 2037
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 2038,
            "end": 2041
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "static",
            "optional": false,
            "typeAnnotation": null,
            "start": 2042,
            "end": 2048
          },
          "optional": false,
          "computed": false,
          "start": 2038,
          "end": 2048
        },
        "right": {
          "type": "ClassExpression",
          "decorators": [],
          "id": null,
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "body": [
              {
                "type": "MethodDefinition",
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2063,
                  "end": 2074
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
                    "start": 2078,
                    "end": 2080
                  },
                  "expression": false,
                  "start": 2075,
                  "end": 2080
                },
                "kind": "constructor",
                "computed": false,
                "static": false,
                "override": false,
                "optional": false,
                "accessibility": null,
                "start": 2063,
                "end": 2080
              }
            ],
            "start": 2057,
            "end": 2082
          },
          "abstract": false,
          "declare": false,
          "start": 2051,
          "end": 2082
        },
        "start": 2038,
        "end": 2082
      },
      "directive": null,
      "start": 2038,
      "end": 2082
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 2083,
            "end": 2086
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "yield",
            "optional": false,
            "typeAnnotation": null,
            "start": 2087,
            "end": 2092
          },
          "optional": false,
          "computed": false,
          "start": 2083,
          "end": 2092
        },
        "right": {
          "type": "ClassExpression",
          "decorators": [],
          "id": null,
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "body": [
              {
                "type": "MethodDefinition",
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2107,
                  "end": 2118
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
                    "start": 2122,
                    "end": 2124
                  },
                  "expression": false,
                  "start": 2119,
                  "end": 2124
                },
                "kind": "constructor",
                "computed": false,
                "static": false,
                "override": false,
                "optional": false,
                "accessibility": null,
                "start": 2107,
                "end": 2124
              }
            ],
            "start": 2101,
            "end": 2126
          },
          "abstract": false,
          "declare": false,
          "start": 2095,
          "end": 2126
        },
        "start": 2083,
        "end": 2126
      },
      "directive": null,
      "start": 2083,
      "end": 2126
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 2127,
            "end": 2130
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "abstract",
            "optional": false,
            "typeAnnotation": null,
            "start": 2131,
            "end": 2139
          },
          "optional": false,
          "computed": false,
          "start": 2127,
          "end": 2139
        },
        "right": {
          "type": "ClassExpression",
          "decorators": [],
          "id": null,
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "body": [
              {
                "type": "MethodDefinition",
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2154,
                  "end": 2165
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
                    "start": 2169,
                    "end": 2171
                  },
                  "expression": false,
                  "start": 2166,
                  "end": 2171
                },
                "kind": "constructor",
                "computed": false,
                "static": false,
                "override": false,
                "optional": false,
                "accessibility": null,
                "start": 2154,
                "end": 2171
              }
            ],
            "start": 2148,
            "end": 2173
          },
          "abstract": false,
          "declare": false,
          "start": 2142,
          "end": 2173
        },
        "start": 2127,
        "end": 2173
      },
      "directive": null,
      "start": 2127,
      "end": 2173
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 2174,
            "end": 2177
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "as",
            "optional": false,
            "typeAnnotation": null,
            "start": 2178,
            "end": 2180
          },
          "optional": false,
          "computed": false,
          "start": 2174,
          "end": 2180
        },
        "right": {
          "type": "ClassExpression",
          "decorators": [],
          "id": null,
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "body": [
              {
                "type": "MethodDefinition",
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2195,
                  "end": 2206
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
                    "start": 2210,
                    "end": 2212
                  },
                  "expression": false,
                  "start": 2207,
                  "end": 2212
                },
                "kind": "constructor",
                "computed": false,
                "static": false,
                "override": false,
                "optional": false,
                "accessibility": null,
                "start": 2195,
                "end": 2212
              }
            ],
            "start": 2189,
            "end": 2214
          },
          "abstract": false,
          "declare": false,
          "start": 2183,
          "end": 2214
        },
        "start": 2174,
        "end": 2214
      },
      "directive": null,
      "start": 2174,
      "end": 2214
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 2215,
            "end": 2218
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "asserts",
            "optional": false,
            "typeAnnotation": null,
            "start": 2219,
            "end": 2226
          },
          "optional": false,
          "computed": false,
          "start": 2215,
          "end": 2226
        },
        "right": {
          "type": "ClassExpression",
          "decorators": [],
          "id": null,
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "body": [
              {
                "type": "MethodDefinition",
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2241,
                  "end": 2252
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
                    "start": 2256,
                    "end": 2258
                  },
                  "expression": false,
                  "start": 2253,
                  "end": 2258
                },
                "kind": "constructor",
                "computed": false,
                "static": false,
                "override": false,
                "optional": false,
                "accessibility": null,
                "start": 2241,
                "end": 2258
              }
            ],
            "start": 2235,
            "end": 2260
          },
          "abstract": false,
          "declare": false,
          "start": 2229,
          "end": 2260
        },
        "start": 2215,
        "end": 2260
      },
      "directive": null,
      "start": 2215,
      "end": 2260
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 2261,
            "end": 2264
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "any",
            "optional": false,
            "typeAnnotation": null,
            "start": 2265,
            "end": 2268
          },
          "optional": false,
          "computed": false,
          "start": 2261,
          "end": 2268
        },
        "right": {
          "type": "ClassExpression",
          "decorators": [],
          "id": null,
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "body": [
              {
                "type": "MethodDefinition",
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2283,
                  "end": 2294
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
                    "start": 2298,
                    "end": 2300
                  },
                  "expression": false,
                  "start": 2295,
                  "end": 2300
                },
                "kind": "constructor",
                "computed": false,
                "static": false,
                "override": false,
                "optional": false,
                "accessibility": null,
                "start": 2283,
                "end": 2300
              }
            ],
            "start": 2277,
            "end": 2302
          },
          "abstract": false,
          "declare": false,
          "start": 2271,
          "end": 2302
        },
        "start": 2261,
        "end": 2302
      },
      "directive": null,
      "start": 2261,
      "end": 2302
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 2303,
            "end": 2306
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "async",
            "optional": false,
            "typeAnnotation": null,
            "start": 2307,
            "end": 2312
          },
          "optional": false,
          "computed": false,
          "start": 2303,
          "end": 2312
        },
        "right": {
          "type": "ClassExpression",
          "decorators": [],
          "id": null,
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "body": [
              {
                "type": "MethodDefinition",
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2327,
                  "end": 2338
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
                    "start": 2342,
                    "end": 2344
                  },
                  "expression": false,
                  "start": 2339,
                  "end": 2344
                },
                "kind": "constructor",
                "computed": false,
                "static": false,
                "override": false,
                "optional": false,
                "accessibility": null,
                "start": 2327,
                "end": 2344
              }
            ],
            "start": 2321,
            "end": 2346
          },
          "abstract": false,
          "declare": false,
          "start": 2315,
          "end": 2346
        },
        "start": 2303,
        "end": 2346
      },
      "directive": null,
      "start": 2303,
      "end": 2346
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 2347,
            "end": 2350
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "await",
            "optional": false,
            "typeAnnotation": null,
            "start": 2351,
            "end": 2356
          },
          "optional": false,
          "computed": false,
          "start": 2347,
          "end": 2356
        },
        "right": {
          "type": "ClassExpression",
          "decorators": [],
          "id": null,
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "body": [
              {
                "type": "MethodDefinition",
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2371,
                  "end": 2382
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
                    "start": 2386,
                    "end": 2388
                  },
                  "expression": false,
                  "start": 2383,
                  "end": 2388
                },
                "kind": "constructor",
                "computed": false,
                "static": false,
                "override": false,
                "optional": false,
                "accessibility": null,
                "start": 2371,
                "end": 2388
              }
            ],
            "start": 2365,
            "end": 2390
          },
          "abstract": false,
          "declare": false,
          "start": 2359,
          "end": 2390
        },
        "start": 2347,
        "end": 2390
      },
      "directive": null,
      "start": 2347,
      "end": 2390
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 2391,
            "end": 2394
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "boolean",
            "optional": false,
            "typeAnnotation": null,
            "start": 2395,
            "end": 2402
          },
          "optional": false,
          "computed": false,
          "start": 2391,
          "end": 2402
        },
        "right": {
          "type": "ClassExpression",
          "decorators": [],
          "id": null,
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "body": [
              {
                "type": "MethodDefinition",
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2417,
                  "end": 2428
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
                    "start": 2432,
                    "end": 2434
                  },
                  "expression": false,
                  "start": 2429,
                  "end": 2434
                },
                "kind": "constructor",
                "computed": false,
                "static": false,
                "override": false,
                "optional": false,
                "accessibility": null,
                "start": 2417,
                "end": 2434
              }
            ],
            "start": 2411,
            "end": 2436
          },
          "abstract": false,
          "declare": false,
          "start": 2405,
          "end": 2436
        },
        "start": 2391,
        "end": 2436
      },
      "directive": null,
      "start": 2391,
      "end": 2436
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 2437,
            "end": 2440
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "constructor",
            "optional": false,
            "typeAnnotation": null,
            "start": 2441,
            "end": 2452
          },
          "optional": false,
          "computed": false,
          "start": 2437,
          "end": 2452
        },
        "right": {
          "type": "ClassExpression",
          "decorators": [],
          "id": null,
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "body": [
              {
                "type": "MethodDefinition",
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2467,
                  "end": 2478
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
                    "start": 2482,
                    "end": 2484
                  },
                  "expression": false,
                  "start": 2479,
                  "end": 2484
                },
                "kind": "constructor",
                "computed": false,
                "static": false,
                "override": false,
                "optional": false,
                "accessibility": null,
                "start": 2467,
                "end": 2484
              }
            ],
            "start": 2461,
            "end": 2486
          },
          "abstract": false,
          "declare": false,
          "start": 2455,
          "end": 2486
        },
        "start": 2437,
        "end": 2486
      },
      "directive": null,
      "start": 2437,
      "end": 2486
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 2487,
            "end": 2490
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "declare",
            "optional": false,
            "typeAnnotation": null,
            "start": 2491,
            "end": 2498
          },
          "optional": false,
          "computed": false,
          "start": 2487,
          "end": 2498
        },
        "right": {
          "type": "ClassExpression",
          "decorators": [],
          "id": null,
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "body": [
              {
                "type": "MethodDefinition",
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2513,
                  "end": 2524
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
                    "start": 2528,
                    "end": 2530
                  },
                  "expression": false,
                  "start": 2525,
                  "end": 2530
                },
                "kind": "constructor",
                "computed": false,
                "static": false,
                "override": false,
                "optional": false,
                "accessibility": null,
                "start": 2513,
                "end": 2530
              }
            ],
            "start": 2507,
            "end": 2532
          },
          "abstract": false,
          "declare": false,
          "start": 2501,
          "end": 2532
        },
        "start": 2487,
        "end": 2532
      },
      "directive": null,
      "start": 2487,
      "end": 2532
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 2533,
            "end": 2536
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "get",
            "optional": false,
            "typeAnnotation": null,
            "start": 2537,
            "end": 2540
          },
          "optional": false,
          "computed": false,
          "start": 2533,
          "end": 2540
        },
        "right": {
          "type": "ClassExpression",
          "decorators": [],
          "id": null,
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "body": [
              {
                "type": "MethodDefinition",
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2555,
                  "end": 2566
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
                    "start": 2570,
                    "end": 2572
                  },
                  "expression": false,
                  "start": 2567,
                  "end": 2572
                },
                "kind": "constructor",
                "computed": false,
                "static": false,
                "override": false,
                "optional": false,
                "accessibility": null,
                "start": 2555,
                "end": 2572
              }
            ],
            "start": 2549,
            "end": 2574
          },
          "abstract": false,
          "declare": false,
          "start": 2543,
          "end": 2574
        },
        "start": 2533,
        "end": 2574
      },
      "directive": null,
      "start": 2533,
      "end": 2574
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 2575,
            "end": 2578
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "infer",
            "optional": false,
            "typeAnnotation": null,
            "start": 2579,
            "end": 2584
          },
          "optional": false,
          "computed": false,
          "start": 2575,
          "end": 2584
        },
        "right": {
          "type": "ClassExpression",
          "decorators": [],
          "id": null,
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "body": [
              {
                "type": "MethodDefinition",
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2599,
                  "end": 2610
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
                    "start": 2614,
                    "end": 2616
                  },
                  "expression": false,
                  "start": 2611,
                  "end": 2616
                },
                "kind": "constructor",
                "computed": false,
                "static": false,
                "override": false,
                "optional": false,
                "accessibility": null,
                "start": 2599,
                "end": 2616
              }
            ],
            "start": 2593,
            "end": 2618
          },
          "abstract": false,
          "declare": false,
          "start": 2587,
          "end": 2618
        },
        "start": 2575,
        "end": 2618
      },
      "directive": null,
      "start": 2575,
      "end": 2618
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 2619,
            "end": 2622
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "is",
            "optional": false,
            "typeAnnotation": null,
            "start": 2623,
            "end": 2625
          },
          "optional": false,
          "computed": false,
          "start": 2619,
          "end": 2625
        },
        "right": {
          "type": "ClassExpression",
          "decorators": [],
          "id": null,
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "body": [
              {
                "type": "MethodDefinition",
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2640,
                  "end": 2651
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
                    "start": 2655,
                    "end": 2657
                  },
                  "expression": false,
                  "start": 2652,
                  "end": 2657
                },
                "kind": "constructor",
                "computed": false,
                "static": false,
                "override": false,
                "optional": false,
                "accessibility": null,
                "start": 2640,
                "end": 2657
              }
            ],
            "start": 2634,
            "end": 2659
          },
          "abstract": false,
          "declare": false,
          "start": 2628,
          "end": 2659
        },
        "start": 2619,
        "end": 2659
      },
      "directive": null,
      "start": 2619,
      "end": 2659
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 2660,
            "end": 2663
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "keyof",
            "optional": false,
            "typeAnnotation": null,
            "start": 2664,
            "end": 2669
          },
          "optional": false,
          "computed": false,
          "start": 2660,
          "end": 2669
        },
        "right": {
          "type": "ClassExpression",
          "decorators": [],
          "id": null,
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "body": [
              {
                "type": "MethodDefinition",
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2684,
                  "end": 2695
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
                    "start": 2699,
                    "end": 2701
                  },
                  "expression": false,
                  "start": 2696,
                  "end": 2701
                },
                "kind": "constructor",
                "computed": false,
                "static": false,
                "override": false,
                "optional": false,
                "accessibility": null,
                "start": 2684,
                "end": 2701
              }
            ],
            "start": 2678,
            "end": 2703
          },
          "abstract": false,
          "declare": false,
          "start": 2672,
          "end": 2703
        },
        "start": 2660,
        "end": 2703
      },
      "directive": null,
      "start": 2660,
      "end": 2703
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 2704,
            "end": 2707
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null,
            "start": 2708,
            "end": 2714
          },
          "optional": false,
          "computed": false,
          "start": 2704,
          "end": 2714
        },
        "right": {
          "type": "ClassExpression",
          "decorators": [],
          "id": null,
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "body": [
              {
                "type": "MethodDefinition",
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2729,
                  "end": 2740
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
                    "start": 2744,
                    "end": 2746
                  },
                  "expression": false,
                  "start": 2741,
                  "end": 2746
                },
                "kind": "constructor",
                "computed": false,
                "static": false,
                "override": false,
                "optional": false,
                "accessibility": null,
                "start": 2729,
                "end": 2746
              }
            ],
            "start": 2723,
            "end": 2748
          },
          "abstract": false,
          "declare": false,
          "start": 2717,
          "end": 2748
        },
        "start": 2704,
        "end": 2748
      },
      "directive": null,
      "start": 2704,
      "end": 2748
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 2749,
            "end": 2752
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "namespace",
            "optional": false,
            "typeAnnotation": null,
            "start": 2753,
            "end": 2762
          },
          "optional": false,
          "computed": false,
          "start": 2749,
          "end": 2762
        },
        "right": {
          "type": "ClassExpression",
          "decorators": [],
          "id": null,
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "body": [
              {
                "type": "MethodDefinition",
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2777,
                  "end": 2788
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
                    "start": 2792,
                    "end": 2794
                  },
                  "expression": false,
                  "start": 2789,
                  "end": 2794
                },
                "kind": "constructor",
                "computed": false,
                "static": false,
                "override": false,
                "optional": false,
                "accessibility": null,
                "start": 2777,
                "end": 2794
              }
            ],
            "start": 2771,
            "end": 2796
          },
          "abstract": false,
          "declare": false,
          "start": 2765,
          "end": 2796
        },
        "start": 2749,
        "end": 2796
      },
      "directive": null,
      "start": 2749,
      "end": 2796
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 2797,
            "end": 2800
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "never",
            "optional": false,
            "typeAnnotation": null,
            "start": 2801,
            "end": 2806
          },
          "optional": false,
          "computed": false,
          "start": 2797,
          "end": 2806
        },
        "right": {
          "type": "ClassExpression",
          "decorators": [],
          "id": null,
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "body": [
              {
                "type": "MethodDefinition",
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2821,
                  "end": 2832
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
                    "start": 2836,
                    "end": 2838
                  },
                  "expression": false,
                  "start": 2833,
                  "end": 2838
                },
                "kind": "constructor",
                "computed": false,
                "static": false,
                "override": false,
                "optional": false,
                "accessibility": null,
                "start": 2821,
                "end": 2838
              }
            ],
            "start": 2815,
            "end": 2840
          },
          "abstract": false,
          "declare": false,
          "start": 2809,
          "end": 2840
        },
        "start": 2797,
        "end": 2840
      },
      "directive": null,
      "start": 2797,
      "end": 2840
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 2841,
            "end": 2844
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "readonly",
            "optional": false,
            "typeAnnotation": null,
            "start": 2845,
            "end": 2853
          },
          "optional": false,
          "computed": false,
          "start": 2841,
          "end": 2853
        },
        "right": {
          "type": "ClassExpression",
          "decorators": [],
          "id": null,
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "body": [
              {
                "type": "MethodDefinition",
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2868,
                  "end": 2879
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
                    "start": 2883,
                    "end": 2885
                  },
                  "expression": false,
                  "start": 2880,
                  "end": 2885
                },
                "kind": "constructor",
                "computed": false,
                "static": false,
                "override": false,
                "optional": false,
                "accessibility": null,
                "start": 2868,
                "end": 2885
              }
            ],
            "start": 2862,
            "end": 2887
          },
          "abstract": false,
          "declare": false,
          "start": 2856,
          "end": 2887
        },
        "start": 2841,
        "end": 2887
      },
      "directive": null,
      "start": 2841,
      "end": 2887
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 2888,
            "end": 2891
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "require",
            "optional": false,
            "typeAnnotation": null,
            "start": 2892,
            "end": 2899
          },
          "optional": false,
          "computed": false,
          "start": 2888,
          "end": 2899
        },
        "right": {
          "type": "ClassExpression",
          "decorators": [],
          "id": null,
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "body": [
              {
                "type": "MethodDefinition",
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2914,
                  "end": 2925
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
                    "start": 2929,
                    "end": 2931
                  },
                  "expression": false,
                  "start": 2926,
                  "end": 2931
                },
                "kind": "constructor",
                "computed": false,
                "static": false,
                "override": false,
                "optional": false,
                "accessibility": null,
                "start": 2914,
                "end": 2931
              }
            ],
            "start": 2908,
            "end": 2933
          },
          "abstract": false,
          "declare": false,
          "start": 2902,
          "end": 2933
        },
        "start": 2888,
        "end": 2933
      },
      "directive": null,
      "start": 2888,
      "end": 2933
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 2934,
            "end": 2937
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "number",
            "optional": false,
            "typeAnnotation": null,
            "start": 2938,
            "end": 2944
          },
          "optional": false,
          "computed": false,
          "start": 2934,
          "end": 2944
        },
        "right": {
          "type": "ClassExpression",
          "decorators": [],
          "id": null,
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "body": [
              {
                "type": "MethodDefinition",
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2959,
                  "end": 2970
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
                    "start": 2974,
                    "end": 2976
                  },
                  "expression": false,
                  "start": 2971,
                  "end": 2976
                },
                "kind": "constructor",
                "computed": false,
                "static": false,
                "override": false,
                "optional": false,
                "accessibility": null,
                "start": 2959,
                "end": 2976
              }
            ],
            "start": 2953,
            "end": 2978
          },
          "abstract": false,
          "declare": false,
          "start": 2947,
          "end": 2978
        },
        "start": 2934,
        "end": 2978
      },
      "directive": null,
      "start": 2934,
      "end": 2978
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 2979,
            "end": 2982
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "object",
            "optional": false,
            "typeAnnotation": null,
            "start": 2983,
            "end": 2989
          },
          "optional": false,
          "computed": false,
          "start": 2979,
          "end": 2989
        },
        "right": {
          "type": "ClassExpression",
          "decorators": [],
          "id": null,
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "body": [
              {
                "type": "MethodDefinition",
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3004,
                  "end": 3015
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
                    "start": 3019,
                    "end": 3021
                  },
                  "expression": false,
                  "start": 3016,
                  "end": 3021
                },
                "kind": "constructor",
                "computed": false,
                "static": false,
                "override": false,
                "optional": false,
                "accessibility": null,
                "start": 3004,
                "end": 3021
              }
            ],
            "start": 2998,
            "end": 3023
          },
          "abstract": false,
          "declare": false,
          "start": 2992,
          "end": 3023
        },
        "start": 2979,
        "end": 3023
      },
      "directive": null,
      "start": 2979,
      "end": 3023
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 3024,
            "end": 3027
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "set",
            "optional": false,
            "typeAnnotation": null,
            "start": 3028,
            "end": 3031
          },
          "optional": false,
          "computed": false,
          "start": 3024,
          "end": 3031
        },
        "right": {
          "type": "ClassExpression",
          "decorators": [],
          "id": null,
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "body": [
              {
                "type": "MethodDefinition",
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3046,
                  "end": 3057
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
                    "start": 3061,
                    "end": 3063
                  },
                  "expression": false,
                  "start": 3058,
                  "end": 3063
                },
                "kind": "constructor",
                "computed": false,
                "static": false,
                "override": false,
                "optional": false,
                "accessibility": null,
                "start": 3046,
                "end": 3063
              }
            ],
            "start": 3040,
            "end": 3065
          },
          "abstract": false,
          "declare": false,
          "start": 3034,
          "end": 3065
        },
        "start": 3024,
        "end": 3065
      },
      "directive": null,
      "start": 3024,
      "end": 3065
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 3066,
            "end": 3069
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "string",
            "optional": false,
            "typeAnnotation": null,
            "start": 3070,
            "end": 3076
          },
          "optional": false,
          "computed": false,
          "start": 3066,
          "end": 3076
        },
        "right": {
          "type": "ClassExpression",
          "decorators": [],
          "id": null,
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "body": [
              {
                "type": "MethodDefinition",
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3091,
                  "end": 3102
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
                    "start": 3106,
                    "end": 3108
                  },
                  "expression": false,
                  "start": 3103,
                  "end": 3108
                },
                "kind": "constructor",
                "computed": false,
                "static": false,
                "override": false,
                "optional": false,
                "accessibility": null,
                "start": 3091,
                "end": 3108
              }
            ],
            "start": 3085,
            "end": 3110
          },
          "abstract": false,
          "declare": false,
          "start": 3079,
          "end": 3110
        },
        "start": 3066,
        "end": 3110
      },
      "directive": null,
      "start": 3066,
      "end": 3110
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 3111,
            "end": 3114
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "symbol",
            "optional": false,
            "typeAnnotation": null,
            "start": 3115,
            "end": 3121
          },
          "optional": false,
          "computed": false,
          "start": 3111,
          "end": 3121
        },
        "right": {
          "type": "ClassExpression",
          "decorators": [],
          "id": null,
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "body": [
              {
                "type": "MethodDefinition",
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3136,
                  "end": 3147
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
                    "start": 3151,
                    "end": 3153
                  },
                  "expression": false,
                  "start": 3148,
                  "end": 3153
                },
                "kind": "constructor",
                "computed": false,
                "static": false,
                "override": false,
                "optional": false,
                "accessibility": null,
                "start": 3136,
                "end": 3153
              }
            ],
            "start": 3130,
            "end": 3155
          },
          "abstract": false,
          "declare": false,
          "start": 3124,
          "end": 3155
        },
        "start": 3111,
        "end": 3155
      },
      "directive": null,
      "start": 3111,
      "end": 3155
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 3156,
            "end": 3159
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null,
            "start": 3160,
            "end": 3164
          },
          "optional": false,
          "computed": false,
          "start": 3156,
          "end": 3164
        },
        "right": {
          "type": "ClassExpression",
          "decorators": [],
          "id": null,
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "body": [
              {
                "type": "MethodDefinition",
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3179,
                  "end": 3190
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
                    "start": 3194,
                    "end": 3196
                  },
                  "expression": false,
                  "start": 3191,
                  "end": 3196
                },
                "kind": "constructor",
                "computed": false,
                "static": false,
                "override": false,
                "optional": false,
                "accessibility": null,
                "start": 3179,
                "end": 3196
              }
            ],
            "start": 3173,
            "end": 3198
          },
          "abstract": false,
          "declare": false,
          "start": 3167,
          "end": 3198
        },
        "start": 3156,
        "end": 3198
      },
      "directive": null,
      "start": 3156,
      "end": 3198
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 3199,
            "end": 3202
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "typeAnnotation": null,
            "start": 3203,
            "end": 3212
          },
          "optional": false,
          "computed": false,
          "start": 3199,
          "end": 3212
        },
        "right": {
          "type": "ClassExpression",
          "decorators": [],
          "id": null,
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "body": [
              {
                "type": "MethodDefinition",
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3227,
                  "end": 3238
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
                    "start": 3242,
                    "end": 3244
                  },
                  "expression": false,
                  "start": 3239,
                  "end": 3244
                },
                "kind": "constructor",
                "computed": false,
                "static": false,
                "override": false,
                "optional": false,
                "accessibility": null,
                "start": 3227,
                "end": 3244
              }
            ],
            "start": 3221,
            "end": 3246
          },
          "abstract": false,
          "declare": false,
          "start": 3215,
          "end": 3246
        },
        "start": 3199,
        "end": 3246
      },
      "directive": null,
      "start": 3199,
      "end": 3246
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 3247,
            "end": 3250
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "unique",
            "optional": false,
            "typeAnnotation": null,
            "start": 3251,
            "end": 3257
          },
          "optional": false,
          "computed": false,
          "start": 3247,
          "end": 3257
        },
        "right": {
          "type": "ClassExpression",
          "decorators": [],
          "id": null,
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "body": [
              {
                "type": "MethodDefinition",
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3272,
                  "end": 3283
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
                    "start": 3287,
                    "end": 3289
                  },
                  "expression": false,
                  "start": 3284,
                  "end": 3289
                },
                "kind": "constructor",
                "computed": false,
                "static": false,
                "override": false,
                "optional": false,
                "accessibility": null,
                "start": 3272,
                "end": 3289
              }
            ],
            "start": 3266,
            "end": 3291
          },
          "abstract": false,
          "declare": false,
          "start": 3260,
          "end": 3291
        },
        "start": 3247,
        "end": 3291
      },
      "directive": null,
      "start": 3247,
      "end": 3291
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 3292,
            "end": 3295
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "unknown",
            "optional": false,
            "typeAnnotation": null,
            "start": 3296,
            "end": 3303
          },
          "optional": false,
          "computed": false,
          "start": 3292,
          "end": 3303
        },
        "right": {
          "type": "ClassExpression",
          "decorators": [],
          "id": null,
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "body": [
              {
                "type": "MethodDefinition",
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3318,
                  "end": 3329
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
                    "start": 3333,
                    "end": 3335
                  },
                  "expression": false,
                  "start": 3330,
                  "end": 3335
                },
                "kind": "constructor",
                "computed": false,
                "static": false,
                "override": false,
                "optional": false,
                "accessibility": null,
                "start": 3318,
                "end": 3335
              }
            ],
            "start": 3312,
            "end": 3337
          },
          "abstract": false,
          "declare": false,
          "start": 3306,
          "end": 3337
        },
        "start": 3292,
        "end": 3337
      },
      "directive": null,
      "start": 3292,
      "end": 3337
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 3338,
            "end": 3341
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "from",
            "optional": false,
            "typeAnnotation": null,
            "start": 3342,
            "end": 3346
          },
          "optional": false,
          "computed": false,
          "start": 3338,
          "end": 3346
        },
        "right": {
          "type": "ClassExpression",
          "decorators": [],
          "id": null,
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "body": [
              {
                "type": "MethodDefinition",
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3361,
                  "end": 3372
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
                    "start": 3376,
                    "end": 3378
                  },
                  "expression": false,
                  "start": 3373,
                  "end": 3378
                },
                "kind": "constructor",
                "computed": false,
                "static": false,
                "override": false,
                "optional": false,
                "accessibility": null,
                "start": 3361,
                "end": 3378
              }
            ],
            "start": 3355,
            "end": 3380
          },
          "abstract": false,
          "declare": false,
          "start": 3349,
          "end": 3380
        },
        "start": 3338,
        "end": 3380
      },
      "directive": null,
      "start": 3338,
      "end": 3380
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 3381,
            "end": 3384
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "global",
            "optional": false,
            "typeAnnotation": null,
            "start": 3385,
            "end": 3391
          },
          "optional": false,
          "computed": false,
          "start": 3381,
          "end": 3391
        },
        "right": {
          "type": "ClassExpression",
          "decorators": [],
          "id": null,
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "body": [
              {
                "type": "MethodDefinition",
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3406,
                  "end": 3417
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
                    "start": 3421,
                    "end": 3423
                  },
                  "expression": false,
                  "start": 3418,
                  "end": 3423
                },
                "kind": "constructor",
                "computed": false,
                "static": false,
                "override": false,
                "optional": false,
                "accessibility": null,
                "start": 3406,
                "end": 3423
              }
            ],
            "start": 3400,
            "end": 3425
          },
          "abstract": false,
          "declare": false,
          "start": 3394,
          "end": 3425
        },
        "start": 3381,
        "end": 3425
      },
      "directive": null,
      "start": 3381,
      "end": 3425
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 3426,
            "end": 3429
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "bigint",
            "optional": false,
            "typeAnnotation": null,
            "start": 3430,
            "end": 3436
          },
          "optional": false,
          "computed": false,
          "start": 3426,
          "end": 3436
        },
        "right": {
          "type": "ClassExpression",
          "decorators": [],
          "id": null,
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "body": [
              {
                "type": "MethodDefinition",
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3451,
                  "end": 3462
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
                    "start": 3466,
                    "end": 3468
                  },
                  "expression": false,
                  "start": 3463,
                  "end": 3468
                },
                "kind": "constructor",
                "computed": false,
                "static": false,
                "override": false,
                "optional": false,
                "accessibility": null,
                "start": 3451,
                "end": 3468
              }
            ],
            "start": 3445,
            "end": 3470
          },
          "abstract": false,
          "declare": false,
          "start": 3439,
          "end": 3470
        },
        "start": 3426,
        "end": 3470
      },
      "directive": null,
      "start": 3426,
      "end": 3470
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 3471,
            "end": 3474
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "of",
            "optional": false,
            "typeAnnotation": null,
            "start": 3475,
            "end": 3477
          },
          "optional": false,
          "computed": false,
          "start": 3471,
          "end": 3477
        },
        "right": {
          "type": "ClassExpression",
          "decorators": [],
          "id": null,
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "body": [
              {
                "type": "MethodDefinition",
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3492,
                  "end": 3503
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
                    "start": 3507,
                    "end": 3509
                  },
                  "expression": false,
                  "start": 3504,
                  "end": 3509
                },
                "kind": "constructor",
                "computed": false,
                "static": false,
                "override": false,
                "optional": false,
                "accessibility": null,
                "start": 3492,
                "end": 3509
              }
            ],
            "start": 3486,
            "end": 3511
          },
          "abstract": false,
          "declare": false,
          "start": 3480,
          "end": 3511
        },
        "start": 3471,
        "end": 3511
      },
      "directive": null,
      "start": 3471,
      "end": 3511
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 3511
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 6,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 9,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 11,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 15,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 17,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 18,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 19,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 36,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 39,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 42,
    "end": 43
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 44,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 50,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 56,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 69,
    "end": 70
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
    "value": "}",
    "start": 74,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 76,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 79,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 82,
    "end": 83
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 84,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 90,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 96,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 111,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 112,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 114,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 129,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 132,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "break",
    "start": 133,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 139,
    "end": 140
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 141,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 147,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 153,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 168,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 169,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 171,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 173,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 176,
    "end": 177
  },
  {
    "type": "Identifier",
    "value": "case",
    "start": 177,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 182,
    "end": 183
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 184,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 190,
    "end": 191
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 196,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 209,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 211,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 212,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 214,
    "end": 215
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 216,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 219,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "catch",
    "start": 220,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 226,
    "end": 227
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 228,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 234,
    "end": 235
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 240,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 252,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 253,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 255,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 256,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 258,
    "end": 259
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 260,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 263,
    "end": 264
  },
  {
    "type": "Identifier",
    "value": "class",
    "start": 264,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 270,
    "end": 271
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 272,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 278,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 284,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 296,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 297,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 299,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 300,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 302,
    "end": 303
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 304,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 307,
    "end": 308
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 308,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 314,
    "end": 315
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 316,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 322,
    "end": 323
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 328,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 340,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 341,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 343,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 344,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 346,
    "end": 347
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 348,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 351,
    "end": 352
  },
  {
    "type": "Identifier",
    "value": "continue",
    "start": 352,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 361,
    "end": 362
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 363,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 369,
    "end": 370
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 375,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "type": "Punctuator",
    "value": "}",
    "start": 391,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 393,
    "end": 394
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 395,
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
    "value": "debugger",
    "start": 399,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 408,
    "end": 409
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 410,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 416,
    "end": 417
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 422,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 434,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 435,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 437,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 438,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 440,
    "end": 441
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 442,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 445,
    "end": 446
  },
  {
    "type": "Identifier",
    "value": "default",
    "start": 446,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 454,
    "end": 455
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 456,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 462,
    "end": 463
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 468,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 480,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 481,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 483,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 484,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 486,
    "end": 487
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 488,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 491,
    "end": 492
  },
  {
    "type": "Identifier",
    "value": "delete",
    "start": 492,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 499,
    "end": 500
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 501,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 507,
    "end": 508
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 513,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 525,
    "end": 526
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 526,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 528,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 529,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 531,
    "end": 532
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 533,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 536,
    "end": 537
  },
  {
    "type": "Identifier",
    "value": "do",
    "start": 537,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 540,
    "end": 541
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 542,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 548,
    "end": 549
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 554,
    "end": 565
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 566,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 567,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 569,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 570,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 572,
    "end": 573
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 574,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 577,
    "end": 578
  },
  {
    "type": "Identifier",
    "value": "else",
    "start": 578,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 583,
    "end": 584
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 585,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 591,
    "end": 592
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 597,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 609,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 610,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 612,
    "end": 613
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 613,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 615,
    "end": 616
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 617,
    "end": 620
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 620,
    "end": 621
  },
  {
    "type": "Identifier",
    "value": "enum",
    "start": 621,
    "end": 625
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 626,
    "end": 627
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 628,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 634,
    "end": 635
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 640,
    "end": 651
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 652,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 653,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 655,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 656,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 658,
    "end": 659
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 660,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 663,
    "end": 664
  },
  {
    "type": "Identifier",
    "value": "export",
    "start": 664,
    "end": 670
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 671,
    "end": 672
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 673,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 679,
    "end": 680
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 685,
    "end": 696
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 697,
    "end": 698
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 698,
    "end": 699
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 700,
    "end": 701
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 701,
    "end": 702
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 703,
    "end": 704
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 705,
    "end": 708
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 708,
    "end": 709
  },
  {
    "type": "Identifier",
    "value": "extends",
    "start": 709,
    "end": 716
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 717,
    "end": 718
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 719,
    "end": 724
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 725,
    "end": 726
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 731,
    "end": 742
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 743,
    "end": 744
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 744,
    "end": 745
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 746,
    "end": 747
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 747,
    "end": 748
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 749,
    "end": 750
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 751,
    "end": 754
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 754,
    "end": 755
  },
  {
    "type": "Identifier",
    "value": "false",
    "start": 755,
    "end": 760
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 761,
    "end": 762
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 763,
    "end": 768
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 769,
    "end": 770
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 775,
    "end": 786
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 787,
    "end": 788
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 788,
    "end": 789
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 790,
    "end": 791
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 791,
    "end": 792
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 793,
    "end": 794
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 795,
    "end": 798
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 798,
    "end": 799
  },
  {
    "type": "Identifier",
    "value": "finally",
    "start": 799,
    "end": 806
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 807,
    "end": 808
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 809,
    "end": 814
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 815,
    "end": 816
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 821,
    "end": 832
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 833,
    "end": 834
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 834,
    "end": 835
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 836,
    "end": 837
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 837,
    "end": 838
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 839,
    "end": 840
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 841,
    "end": 844
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 844,
    "end": 845
  },
  {
    "type": "Identifier",
    "value": "for",
    "start": 845,
    "end": 848
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 849,
    "end": 850
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 851,
    "end": 856
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 857,
    "end": 858
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 863,
    "end": 874
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 875,
    "end": 876
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 876,
    "end": 877
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 878,
    "end": 879
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 879,
    "end": 880
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 881,
    "end": 882
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 883,
    "end": 886
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 886,
    "end": 887
  },
  {
    "type": "Identifier",
    "value": "function",
    "start": 887,
    "end": 895
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 896,
    "end": 897
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 898,
    "end": 903
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 904,
    "end": 905
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 910,
    "end": 921
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 922,
    "end": 923
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 923,
    "end": 924
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 925,
    "end": 926
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 926,
    "end": 927
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 928,
    "end": 929
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 930,
    "end": 933
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 933,
    "end": 934
  },
  {
    "type": "Identifier",
    "value": "if",
    "start": 934,
    "end": 936
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 937,
    "end": 938
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 939,
    "end": 944
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 945,
    "end": 946
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 951,
    "end": 962
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 963,
    "end": 964
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 964,
    "end": 965
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 966,
    "end": 967
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 967,
    "end": 968
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 969,
    "end": 970
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 971,
    "end": 974
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 974,
    "end": 975
  },
  {
    "type": "Identifier",
    "value": "import",
    "start": 975,
    "end": 981
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 982,
    "end": 983
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 984,
    "end": 989
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 990,
    "end": 991
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 996,
    "end": 1007
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1008,
    "end": 1009
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1009,
    "end": 1010
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1011,
    "end": 1012
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1012,
    "end": 1013
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1014,
    "end": 1015
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1016,
    "end": 1019
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1019,
    "end": 1020
  },
  {
    "type": "Identifier",
    "value": "in",
    "start": 1020,
    "end": 1022
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1023,
    "end": 1024
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1025,
    "end": 1030
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1031,
    "end": 1032
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1037,
    "end": 1048
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1049,
    "end": 1050
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1050,
    "end": 1051
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1052,
    "end": 1053
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1053,
    "end": 1054
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1055,
    "end": 1056
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1057,
    "end": 1060
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1060,
    "end": 1061
  },
  {
    "type": "Identifier",
    "value": "instanceof",
    "start": 1061,
    "end": 1071
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1072,
    "end": 1073
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1074,
    "end": 1079
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1080,
    "end": 1081
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1086,
    "end": 1097
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1098,
    "end": 1099
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1099,
    "end": 1100
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1101,
    "end": 1102
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1102,
    "end": 1103
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1104,
    "end": 1105
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1106,
    "end": 1109
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1109,
    "end": 1110
  },
  {
    "type": "Identifier",
    "value": "new",
    "start": 1110,
    "end": 1113
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1114,
    "end": 1115
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1116,
    "end": 1121
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1122,
    "end": 1123
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1128,
    "end": 1139
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1140,
    "end": 1141
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1141,
    "end": 1142
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1143,
    "end": 1144
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1144,
    "end": 1145
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1146,
    "end": 1147
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1148,
    "end": 1151
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1151,
    "end": 1152
  },
  {
    "type": "Identifier",
    "value": "null",
    "start": 1152,
    "end": 1156
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1157,
    "end": 1158
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1159,
    "end": 1164
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1165,
    "end": 1166
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1171,
    "end": 1182
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1183,
    "end": 1184
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1184,
    "end": 1185
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1186,
    "end": 1187
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1187,
    "end": 1188
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1189,
    "end": 1190
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1191,
    "end": 1194
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1194,
    "end": 1195
  },
  {
    "type": "Identifier",
    "value": "return",
    "start": 1195,
    "end": 1201
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1202,
    "end": 1203
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1204,
    "end": 1209
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1210,
    "end": 1211
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1216,
    "end": 1227
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1228,
    "end": 1229
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1229,
    "end": 1230
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1231,
    "end": 1232
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1232,
    "end": 1233
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1234,
    "end": 1235
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1236,
    "end": 1239
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1239,
    "end": 1240
  },
  {
    "type": "Identifier",
    "value": "super",
    "start": 1240,
    "end": 1245
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1246,
    "end": 1247
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1248,
    "end": 1253
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1254,
    "end": 1255
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1260,
    "end": 1271
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1272,
    "end": 1273
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1273,
    "end": 1274
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1275,
    "end": 1276
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1276,
    "end": 1277
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1278,
    "end": 1279
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1280,
    "end": 1283
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1283,
    "end": 1284
  },
  {
    "type": "Identifier",
    "value": "switch",
    "start": 1284,
    "end": 1290
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1291,
    "end": 1292
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1293,
    "end": 1298
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1299,
    "end": 1300
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1305,
    "end": 1316
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1317,
    "end": 1318
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1318,
    "end": 1319
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1320,
    "end": 1321
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1321,
    "end": 1322
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1323,
    "end": 1324
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1325,
    "end": 1328
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1328,
    "end": 1329
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 1329,
    "end": 1333
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1334,
    "end": 1335
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1336,
    "end": 1341
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1342,
    "end": 1343
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1348,
    "end": 1359
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1360,
    "end": 1361
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1361,
    "end": 1362
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1363,
    "end": 1364
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1364,
    "end": 1365
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1366,
    "end": 1367
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1368,
    "end": 1371
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1371,
    "end": 1372
  },
  {
    "type": "Identifier",
    "value": "throw",
    "start": 1372,
    "end": 1377
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1378,
    "end": 1379
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1380,
    "end": 1385
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1386,
    "end": 1387
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1392,
    "end": 1403
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1404,
    "end": 1405
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1405,
    "end": 1406
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1407,
    "end": 1408
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1408,
    "end": 1409
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1410,
    "end": 1411
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1412,
    "end": 1415
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1415,
    "end": 1416
  },
  {
    "type": "Identifier",
    "value": "true",
    "start": 1416,
    "end": 1420
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1421,
    "end": 1422
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1423,
    "end": 1428
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1429,
    "end": 1430
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1435,
    "end": 1446
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1447,
    "end": 1448
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1448,
    "end": 1449
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1450,
    "end": 1451
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1451,
    "end": 1452
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1453,
    "end": 1454
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1455,
    "end": 1458
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1458,
    "end": 1459
  },
  {
    "type": "Identifier",
    "value": "try",
    "start": 1459,
    "end": 1462
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1463,
    "end": 1464
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1465,
    "end": 1470
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1471,
    "end": 1472
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1477,
    "end": 1488
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1489,
    "end": 1490
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1490,
    "end": 1491
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1492,
    "end": 1493
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1493,
    "end": 1494
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1495,
    "end": 1496
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1497,
    "end": 1500
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1500,
    "end": 1501
  },
  {
    "type": "Identifier",
    "value": "typeof",
    "start": 1501,
    "end": 1507
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1508,
    "end": 1509
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1510,
    "end": 1515
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1516,
    "end": 1517
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1522,
    "end": 1533
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1534,
    "end": 1535
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1535,
    "end": 1536
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1537,
    "end": 1538
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1538,
    "end": 1539
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1540,
    "end": 1541
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1542,
    "end": 1545
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1545,
    "end": 1546
  },
  {
    "type": "Identifier",
    "value": "var",
    "start": 1546,
    "end": 1549
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1550,
    "end": 1551
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1552,
    "end": 1557
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1558,
    "end": 1559
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1564,
    "end": 1575
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1576,
    "end": 1577
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1577,
    "end": 1578
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1579,
    "end": 1580
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1580,
    "end": 1581
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1582,
    "end": 1583
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1584,
    "end": 1587
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1587,
    "end": 1588
  },
  {
    "type": "Identifier",
    "value": "void",
    "start": 1588,
    "end": 1592
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1593,
    "end": 1594
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1595,
    "end": 1600
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1601,
    "end": 1602
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1607,
    "end": 1618
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1619,
    "end": 1620
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1620,
    "end": 1621
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1622,
    "end": 1623
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1623,
    "end": 1624
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1625,
    "end": 1626
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1627,
    "end": 1630
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1630,
    "end": 1631
  },
  {
    "type": "Identifier",
    "value": "while",
    "start": 1631,
    "end": 1636
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1637,
    "end": 1638
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1639,
    "end": 1644
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1645,
    "end": 1646
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1651,
    "end": 1662
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1663,
    "end": 1664
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1664,
    "end": 1665
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1666,
    "end": 1667
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1667,
    "end": 1668
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1669,
    "end": 1670
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1671,
    "end": 1674
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1674,
    "end": 1675
  },
  {
    "type": "Identifier",
    "value": "with",
    "start": 1675,
    "end": 1679
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1680,
    "end": 1681
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1682,
    "end": 1687
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1688,
    "end": 1689
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1694,
    "end": 1705
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1706,
    "end": 1707
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1707,
    "end": 1708
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1709,
    "end": 1710
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1710,
    "end": 1711
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1712,
    "end": 1713
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1714,
    "end": 1717
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1717,
    "end": 1718
  },
  {
    "type": "Identifier",
    "value": "implements",
    "start": 1718,
    "end": 1728
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1729,
    "end": 1730
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1731,
    "end": 1736
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1737,
    "end": 1738
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1743,
    "end": 1754
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1755,
    "end": 1756
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1756,
    "end": 1757
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1758,
    "end": 1759
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1759,
    "end": 1760
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1761,
    "end": 1762
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1763,
    "end": 1766
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1766,
    "end": 1767
  },
  {
    "type": "Identifier",
    "value": "interface",
    "start": 1767,
    "end": 1776
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1777,
    "end": 1778
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1779,
    "end": 1784
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1785,
    "end": 1786
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1791,
    "end": 1802
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1803,
    "end": 1804
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1804,
    "end": 1805
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1806,
    "end": 1807
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1807,
    "end": 1808
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1809,
    "end": 1810
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1811,
    "end": 1814
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1814,
    "end": 1815
  },
  {
    "type": "Identifier",
    "value": "let",
    "start": 1815,
    "end": 1818
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1819,
    "end": 1820
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1821,
    "end": 1826
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1827,
    "end": 1828
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1833,
    "end": 1844
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1845,
    "end": 1846
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1846,
    "end": 1847
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1848,
    "end": 1849
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1849,
    "end": 1850
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1851,
    "end": 1852
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1853,
    "end": 1856
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1856,
    "end": 1857
  },
  {
    "type": "Identifier",
    "value": "package",
    "start": 1857,
    "end": 1864
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1865,
    "end": 1866
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1867,
    "end": 1872
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1873,
    "end": 1874
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1879,
    "end": 1890
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1891,
    "end": 1892
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1892,
    "end": 1893
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1894,
    "end": 1895
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1895,
    "end": 1896
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1897,
    "end": 1898
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1899,
    "end": 1902
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1902,
    "end": 1903
  },
  {
    "type": "Identifier",
    "value": "private",
    "start": 1903,
    "end": 1910
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1911,
    "end": 1912
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1913,
    "end": 1918
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1919,
    "end": 1920
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1925,
    "end": 1936
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1937,
    "end": 1938
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1938,
    "end": 1939
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1940,
    "end": 1941
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Identifier",
    "value": "foo",
    "start": 1945,
    "end": 1948
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1948,
    "end": 1949
  },
  {
    "type": "Identifier",
    "value": "protected",
    "start": 1949,
    "end": 1958
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1959,
    "end": 1960
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1961,
    "end": 1966
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1967,
    "end": 1968
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1973,
    "end": 1984
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1985,
    "end": 1986
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1986,
    "end": 1987
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1988,
    "end": 1989
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1989,
    "end": 1990
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1991,
    "end": 1992
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1993,
    "end": 1996
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1996,
    "end": 1997
  },
  {
    "type": "Identifier",
    "value": "public",
    "start": 1997,
    "end": 2003
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2004,
    "end": 2005
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2006,
    "end": 2011
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2012,
    "end": 2013
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 2018,
    "end": 2029
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2030,
    "end": 2031
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2031,
    "end": 2032
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2033,
    "end": 2034
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2034,
    "end": 2035
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2036,
    "end": 2037
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2038,
    "end": 2041
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2041,
    "end": 2042
  },
  {
    "type": "Identifier",
    "value": "static",
    "start": 2042,
    "end": 2048
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2049,
    "end": 2050
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2051,
    "end": 2056
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2057,
    "end": 2058
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 2063,
    "end": 2074
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2075,
    "end": 2076
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2076,
    "end": 2077
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2078,
    "end": 2079
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2079,
    "end": 2080
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2081,
    "end": 2082
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2083,
    "end": 2086
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2086,
    "end": 2087
  },
  {
    "type": "Identifier",
    "value": "yield",
    "start": 2087,
    "end": 2092
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2093,
    "end": 2094
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2095,
    "end": 2100
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2101,
    "end": 2102
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 2107,
    "end": 2118
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2119,
    "end": 2120
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2120,
    "end": 2121
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2122,
    "end": 2123
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2123,
    "end": 2124
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2125,
    "end": 2126
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2127,
    "end": 2130
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2130,
    "end": 2131
  },
  {
    "type": "Identifier",
    "value": "abstract",
    "start": 2131,
    "end": 2139
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2140,
    "end": 2141
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2142,
    "end": 2147
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2148,
    "end": 2149
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 2154,
    "end": 2165
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2166,
    "end": 2167
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2167,
    "end": 2168
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2169,
    "end": 2170
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2170,
    "end": 2171
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2172,
    "end": 2173
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2174,
    "end": 2177
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2177,
    "end": 2178
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 2178,
    "end": 2180
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2181,
    "end": 2182
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2183,
    "end": 2188
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2189,
    "end": 2190
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 2195,
    "end": 2206
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2207,
    "end": 2208
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2208,
    "end": 2209
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2210,
    "end": 2211
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2211,
    "end": 2212
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2213,
    "end": 2214
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2215,
    "end": 2218
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2218,
    "end": 2219
  },
  {
    "type": "Identifier",
    "value": "asserts",
    "start": 2219,
    "end": 2226
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2227,
    "end": 2228
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2229,
    "end": 2234
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2235,
    "end": 2236
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 2241,
    "end": 2252
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2253,
    "end": 2254
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2254,
    "end": 2255
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2256,
    "end": 2257
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2257,
    "end": 2258
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2259,
    "end": 2260
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2261,
    "end": 2264
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2264,
    "end": 2265
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2265,
    "end": 2268
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2269,
    "end": 2270
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2271,
    "end": 2276
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2277,
    "end": 2278
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 2283,
    "end": 2294
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2295,
    "end": 2296
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2296,
    "end": 2297
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2298,
    "end": 2299
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2299,
    "end": 2300
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2301,
    "end": 2302
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2303,
    "end": 2306
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2306,
    "end": 2307
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 2307,
    "end": 2312
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2313,
    "end": 2314
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2315,
    "end": 2320
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2321,
    "end": 2322
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 2327,
    "end": 2338
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2339,
    "end": 2340
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2340,
    "end": 2341
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2342,
    "end": 2343
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2343,
    "end": 2344
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2345,
    "end": 2346
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2347,
    "end": 2350
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2350,
    "end": 2351
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 2351,
    "end": 2356
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2357,
    "end": 2358
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2359,
    "end": 2364
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2365,
    "end": 2366
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 2371,
    "end": 2382
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2383,
    "end": 2384
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2384,
    "end": 2385
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2386,
    "end": 2387
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Identifier",
    "value": "foo",
    "start": 2391,
    "end": 2394
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2394,
    "end": 2395
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2395,
    "end": 2402
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2403,
    "end": 2404
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2405,
    "end": 2410
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2411,
    "end": 2412
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 2417,
    "end": 2428
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2429,
    "end": 2430
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2430,
    "end": 2431
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2432,
    "end": 2433
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2433,
    "end": 2434
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2435,
    "end": 2436
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2437,
    "end": 2440
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2440,
    "end": 2441
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 2441,
    "end": 2452
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2453,
    "end": 2454
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2455,
    "end": 2460
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2461,
    "end": 2462
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 2467,
    "end": 2478
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2479,
    "end": 2480
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2480,
    "end": 2481
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2482,
    "end": 2483
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2483,
    "end": 2484
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2485,
    "end": 2486
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2487,
    "end": 2490
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2490,
    "end": 2491
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2491,
    "end": 2498
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2499,
    "end": 2500
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2501,
    "end": 2506
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2507,
    "end": 2508
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 2513,
    "end": 2524
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2525,
    "end": 2526
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2526,
    "end": 2527
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2528,
    "end": 2529
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2529,
    "end": 2530
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2531,
    "end": 2532
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2533,
    "end": 2536
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2536,
    "end": 2537
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 2537,
    "end": 2540
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2541,
    "end": 2542
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2543,
    "end": 2548
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2549,
    "end": 2550
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 2555,
    "end": 2566
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2567,
    "end": 2568
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "}",
    "start": 2571,
    "end": 2572
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2573,
    "end": 2574
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2575,
    "end": 2578
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2578,
    "end": 2579
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 2579,
    "end": 2584
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2585,
    "end": 2586
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2587,
    "end": 2592
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2593,
    "end": 2594
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 2599,
    "end": 2610
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2611,
    "end": 2612
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2612,
    "end": 2613
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2614,
    "end": 2615
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2615,
    "end": 2616
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2617,
    "end": 2618
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2619,
    "end": 2622
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2622,
    "end": 2623
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 2623,
    "end": 2625
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2626,
    "end": 2627
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2628,
    "end": 2633
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2634,
    "end": 2635
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 2640,
    "end": 2651
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2652,
    "end": 2653
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2653,
    "end": 2654
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2655,
    "end": 2656
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2656,
    "end": 2657
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2658,
    "end": 2659
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2660,
    "end": 2663
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2663,
    "end": 2664
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 2664,
    "end": 2669
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2670,
    "end": 2671
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2672,
    "end": 2677
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2678,
    "end": 2679
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 2684,
    "end": 2695
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2696,
    "end": 2697
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2697,
    "end": 2698
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2699,
    "end": 2700
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2700,
    "end": 2701
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2702,
    "end": 2703
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2704,
    "end": 2707
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2707,
    "end": 2708
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 2708,
    "end": 2714
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2715,
    "end": 2716
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2717,
    "end": 2722
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2723,
    "end": 2724
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 2729,
    "end": 2740
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2741,
    "end": 2742
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2742,
    "end": 2743
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2744,
    "end": 2745
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2745,
    "end": 2746
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2747,
    "end": 2748
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2749,
    "end": 2752
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2752,
    "end": 2753
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 2753,
    "end": 2762
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2763,
    "end": 2764
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2765,
    "end": 2770
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2771,
    "end": 2772
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 2777,
    "end": 2788
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2789,
    "end": 2790
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2790,
    "end": 2791
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2792,
    "end": 2793
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2793,
    "end": 2794
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2795,
    "end": 2796
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2797,
    "end": 2800
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2800,
    "end": 2801
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 2801,
    "end": 2806
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2807,
    "end": 2808
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2809,
    "end": 2814
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2815,
    "end": 2816
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 2821,
    "end": 2832
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2833,
    "end": 2834
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2834,
    "end": 2835
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2836,
    "end": 2837
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2837,
    "end": 2838
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2839,
    "end": 2840
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2841,
    "end": 2844
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2844,
    "end": 2845
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 2845,
    "end": 2853
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2854,
    "end": 2855
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2856,
    "end": 2861
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2862,
    "end": 2863
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 2868,
    "end": 2879
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2880,
    "end": 2881
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2881,
    "end": 2882
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2883,
    "end": 2884
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2884,
    "end": 2885
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2886,
    "end": 2887
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2888,
    "end": 2891
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2891,
    "end": 2892
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 2892,
    "end": 2899
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2900,
    "end": 2901
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2902,
    "end": 2907
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2908,
    "end": 2909
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 2914,
    "end": 2925
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2926,
    "end": 2927
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2927,
    "end": 2928
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2929,
    "end": 2930
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2930,
    "end": 2931
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2932,
    "end": 2933
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2934,
    "end": 2937
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2937,
    "end": 2938
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2938,
    "end": 2944
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2945,
    "end": 2946
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2947,
    "end": 2952
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2953,
    "end": 2954
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 2959,
    "end": 2970
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2971,
    "end": 2972
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2972,
    "end": 2973
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2974,
    "end": 2975
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2975,
    "end": 2976
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2977,
    "end": 2978
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2979,
    "end": 2982
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2982,
    "end": 2983
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 2983,
    "end": 2989
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2990,
    "end": 2991
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2992,
    "end": 2997
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2998,
    "end": 2999
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 3004,
    "end": 3015
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3016,
    "end": 3017
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3017,
    "end": 3018
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3019,
    "end": 3020
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3020,
    "end": 3021
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3022,
    "end": 3023
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 3024,
    "end": 3027
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3027,
    "end": 3028
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 3028,
    "end": 3031
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3032,
    "end": 3033
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 3034,
    "end": 3039
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3040,
    "end": 3041
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 3046,
    "end": 3057
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3058,
    "end": 3059
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3059,
    "end": 3060
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3061,
    "end": 3062
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3062,
    "end": 3063
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3064,
    "end": 3065
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 3066,
    "end": 3069
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3069,
    "end": 3070
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3070,
    "end": 3076
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3077,
    "end": 3078
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 3079,
    "end": 3084
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3085,
    "end": 3086
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 3091,
    "end": 3102
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3103,
    "end": 3104
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3104,
    "end": 3105
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3106,
    "end": 3107
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3107,
    "end": 3108
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3109,
    "end": 3110
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 3111,
    "end": 3114
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3114,
    "end": 3115
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 3115,
    "end": 3121
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3122,
    "end": 3123
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 3124,
    "end": 3129
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3130,
    "end": 3131
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 3136,
    "end": 3147
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3148,
    "end": 3149
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3149,
    "end": 3150
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3151,
    "end": 3152
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3152,
    "end": 3153
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3154,
    "end": 3155
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 3156,
    "end": 3159
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3159,
    "end": 3160
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3160,
    "end": 3164
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3165,
    "end": 3166
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 3167,
    "end": 3172
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3173,
    "end": 3174
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 3179,
    "end": 3190
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3191,
    "end": 3192
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3192,
    "end": 3193
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3194,
    "end": 3195
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3195,
    "end": 3196
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3197,
    "end": 3198
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 3199,
    "end": 3202
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3202,
    "end": 3203
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 3203,
    "end": 3212
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3213,
    "end": 3214
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 3215,
    "end": 3220
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3221,
    "end": 3222
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 3227,
    "end": 3238
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3239,
    "end": 3240
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3240,
    "end": 3241
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3242,
    "end": 3243
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3243,
    "end": 3244
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3245,
    "end": 3246
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 3247,
    "end": 3250
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3250,
    "end": 3251
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 3251,
    "end": 3257
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3258,
    "end": 3259
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 3260,
    "end": 3265
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3266,
    "end": 3267
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 3272,
    "end": 3283
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3284,
    "end": 3285
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3285,
    "end": 3286
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3287,
    "end": 3288
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3288,
    "end": 3289
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3290,
    "end": 3291
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 3292,
    "end": 3295
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3295,
    "end": 3296
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 3296,
    "end": 3303
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3304,
    "end": 3305
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 3306,
    "end": 3311
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3312,
    "end": 3313
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 3318,
    "end": 3329
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3330,
    "end": 3331
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3331,
    "end": 3332
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3333,
    "end": 3334
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3334,
    "end": 3335
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3336,
    "end": 3337
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 3338,
    "end": 3341
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3341,
    "end": 3342
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 3342,
    "end": 3346
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3347,
    "end": 3348
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 3349,
    "end": 3354
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3355,
    "end": 3356
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 3361,
    "end": 3372
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3373,
    "end": 3374
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3374,
    "end": 3375
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3376,
    "end": 3377
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3377,
    "end": 3378
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3379,
    "end": 3380
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 3381,
    "end": 3384
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3384,
    "end": 3385
  },
  {
    "type": "Identifier",
    "value": "global",
    "start": 3385,
    "end": 3391
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3392,
    "end": 3393
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 3394,
    "end": 3399
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3400,
    "end": 3401
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 3406,
    "end": 3417
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3418,
    "end": 3419
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3419,
    "end": 3420
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3421,
    "end": 3422
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3422,
    "end": 3423
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3424,
    "end": 3425
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 3426,
    "end": 3429
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3429,
    "end": 3430
  },
  {
    "type": "Identifier",
    "value": "bigint",
    "start": 3430,
    "end": 3436
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3437,
    "end": 3438
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 3439,
    "end": 3444
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3445,
    "end": 3446
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 3451,
    "end": 3462
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3463,
    "end": 3464
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3464,
    "end": 3465
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3466,
    "end": 3467
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3467,
    "end": 3468
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3469,
    "end": 3470
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 3471,
    "end": 3474
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3474,
    "end": 3475
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 3475,
    "end": 3477
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3478,
    "end": 3479
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 3480,
    "end": 3485
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3486,
    "end": 3487
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 3492,
    "end": 3503
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3504,
    "end": 3505
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3505,
    "end": 3506
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3507,
    "end": 3508
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3508,
    "end": 3509
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3510,
    "end": 3511
  }
]
```
