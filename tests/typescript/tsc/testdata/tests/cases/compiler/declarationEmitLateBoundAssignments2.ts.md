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
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 63,
            "end": 64
          },
          "init": {
            "type": "Literal",
            "value": "C",
            "raw": "\"C\"",
            "start": 67,
            "end": 70
          },
          "definite": false,
          "start": 63,
          "end": 70
        }
      ],
      "declare": false,
      "start": 57,
      "end": 70
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
            "name": "num",
            "optional": false,
            "typeAnnotation": null,
            "start": 77,
            "end": 80
          },
          "init": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 83,
            "end": 84
          },
          "definite": false,
          "start": 77,
          "end": 84
        }
      ],
      "declare": false,
      "start": 71,
      "end": 84
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
            "name": "numStr",
            "optional": false,
            "typeAnnotation": null,
            "start": 91,
            "end": 97
          },
          "init": {
            "type": "Literal",
            "value": "10",
            "raw": "\"10\"",
            "start": 100,
            "end": 104
          },
          "definite": false,
          "start": 91,
          "end": 104
        }
      ],
      "declare": false,
      "start": 85,
      "end": 104
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
            "name": "withWhitespace",
            "optional": false,
            "typeAnnotation": null,
            "start": 111,
            "end": 125
          },
          "init": {
            "type": "Literal",
            "value": "foo bar",
            "raw": "\"foo bar\"",
            "start": 128,
            "end": 137
          },
          "definite": false,
          "start": 111,
          "end": 137
        }
      ],
      "declare": false,
      "start": 105,
      "end": 137
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
            "name": "emoji",
            "optional": false,
            "typeAnnotation": null,
            "start": 144,
            "end": 149
          },
          "init": {
            "type": "Literal",
            "value": "🤷‍♂️",
            "raw": "\"🤷‍♂️\"",
            "start": 152,
            "end": 159
          },
          "definite": false,
          "start": 144,
          "end": 159
        }
      ],
      "declare": false,
      "start": 138,
      "end": 159
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "decl",
          "optional": false,
          "typeAnnotation": null,
          "start": 177,
          "end": 181
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 184,
          "end": 186
        },
        "expression": false,
        "start": 168,
        "end": 186
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 161,
      "end": 186
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
            "name": "decl",
            "optional": false,
            "typeAnnotation": null,
            "start": 187,
            "end": 191
          },
          "property": {
            "type": "Literal",
            "value": "B",
            "raw": "\"B\"",
            "start": 192,
            "end": 195
          },
          "optional": false,
          "computed": true,
          "start": 187,
          "end": 196
        },
        "right": {
          "type": "Literal",
          "value": "foo",
          "raw": "'foo'",
          "start": 199,
          "end": 204
        },
        "start": 187,
        "end": 204
      },
      "directive": null,
      "start": 187,
      "end": 204
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "decl2",
          "optional": false,
          "typeAnnotation": null,
          "start": 222,
          "end": 227
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 230,
          "end": 232
        },
        "expression": false,
        "start": 213,
        "end": 232
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 206,
      "end": 232
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
            "name": "decl2",
            "optional": false,
            "typeAnnotation": null,
            "start": 233,
            "end": 238
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 239,
            "end": 240
          },
          "optional": false,
          "computed": true,
          "start": 233,
          "end": 241
        },
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 244,
          "end": 245
        },
        "start": 233,
        "end": 245
      },
      "directive": null,
      "start": 233,
      "end": 245
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "decl3",
          "optional": false,
          "typeAnnotation": null,
          "start": 263,
          "end": 268
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 271,
          "end": 273
        },
        "expression": false,
        "start": 254,
        "end": 273
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 247,
      "end": 273
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
            "name": "decl3",
            "optional": false,
            "typeAnnotation": null,
            "start": 274,
            "end": 279
          },
          "property": {
            "type": "Literal",
            "value": 77,
            "raw": "77",
            "start": 280,
            "end": 282
          },
          "optional": false,
          "computed": true,
          "start": 274,
          "end": 283
        },
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 286,
          "end": 287
        },
        "start": 274,
        "end": 287
      },
      "directive": null,
      "start": 274,
      "end": 287
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "decl4",
          "optional": false,
          "typeAnnotation": null,
          "start": 305,
          "end": 310
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 313,
          "end": 315
        },
        "expression": false,
        "start": 296,
        "end": 315
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 289,
      "end": 315
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
            "name": "decl4",
            "optional": false,
            "typeAnnotation": null,
            "start": 316,
            "end": 321
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "num",
            "optional": false,
            "typeAnnotation": null,
            "start": 322,
            "end": 325
          },
          "optional": false,
          "computed": true,
          "start": 316,
          "end": 326
        },
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 329,
          "end": 330
        },
        "start": 316,
        "end": 330
      },
      "directive": null,
      "start": 316,
      "end": 330
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "decl5",
          "optional": false,
          "typeAnnotation": null,
          "start": 348,
          "end": 353
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 356,
          "end": 358
        },
        "expression": false,
        "start": 339,
        "end": 358
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 332,
      "end": 358
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
            "name": "decl5",
            "optional": false,
            "typeAnnotation": null,
            "start": 359,
            "end": 364
          },
          "property": {
            "type": "Literal",
            "value": "101",
            "raw": "\"101\"",
            "start": 365,
            "end": 370
          },
          "optional": false,
          "computed": true,
          "start": 359,
          "end": 371
        },
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 374,
          "end": 375
        },
        "start": 359,
        "end": 375
      },
      "directive": null,
      "start": 359,
      "end": 375
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "decl6",
          "optional": false,
          "typeAnnotation": null,
          "start": 393,
          "end": 398
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 401,
          "end": 403
        },
        "expression": false,
        "start": 384,
        "end": 403
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 377,
      "end": 403
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
            "name": "decl6",
            "optional": false,
            "typeAnnotation": null,
            "start": 404,
            "end": 409
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "numStr",
            "optional": false,
            "typeAnnotation": null,
            "start": 410,
            "end": 416
          },
          "optional": false,
          "computed": true,
          "start": 404,
          "end": 417
        },
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 420,
          "end": 421
        },
        "start": 404,
        "end": 421
      },
      "directive": null,
      "start": 404,
      "end": 421
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "decl7",
          "optional": false,
          "typeAnnotation": null,
          "start": 439,
          "end": 444
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 447,
          "end": 449
        },
        "expression": false,
        "start": 430,
        "end": 449
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 423,
      "end": 449
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
            "name": "decl7",
            "optional": false,
            "typeAnnotation": null,
            "start": 450,
            "end": 455
          },
          "property": {
            "type": "Literal",
            "value": "qwe rty",
            "raw": "\"qwe rty\"",
            "start": 456,
            "end": 465
          },
          "optional": false,
          "computed": true,
          "start": 450,
          "end": 466
        },
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 469,
          "end": 470
        },
        "start": 450,
        "end": 470
      },
      "directive": null,
      "start": 450,
      "end": 470
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "decl8",
          "optional": false,
          "typeAnnotation": null,
          "start": 488,
          "end": 493
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 496,
          "end": 498
        },
        "expression": false,
        "start": 479,
        "end": 498
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 472,
      "end": 498
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
            "name": "decl8",
            "optional": false,
            "typeAnnotation": null,
            "start": 499,
            "end": 504
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "withWhitespace",
            "optional": false,
            "typeAnnotation": null,
            "start": 505,
            "end": 519
          },
          "optional": false,
          "computed": true,
          "start": 499,
          "end": 520
        },
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 523,
          "end": 524
        },
        "start": 499,
        "end": 524
      },
      "directive": null,
      "start": 499,
      "end": 524
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "decl9",
          "optional": false,
          "typeAnnotation": null,
          "start": 542,
          "end": 547
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 550,
          "end": 552
        },
        "expression": false,
        "start": 533,
        "end": 552
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 526,
      "end": 552
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
            "name": "decl9",
            "optional": false,
            "typeAnnotation": null,
            "start": 553,
            "end": 558
          },
          "property": {
            "type": "Literal",
            "value": "🤪",
            "raw": "\"🤪\"",
            "start": 559,
            "end": 563
          },
          "optional": false,
          "computed": true,
          "start": 553,
          "end": 564
        },
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 567,
          "end": 568
        },
        "start": 553,
        "end": 568
      },
      "directive": null,
      "start": 553,
      "end": 568
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "decl10",
          "optional": false,
          "typeAnnotation": null,
          "start": 586,
          "end": 592
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 595,
          "end": 597
        },
        "expression": false,
        "start": 577,
        "end": 597
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 570,
      "end": 597
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
            "name": "decl10",
            "optional": false,
            "typeAnnotation": null,
            "start": 598,
            "end": 604
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "emoji",
            "optional": false,
            "typeAnnotation": null,
            "start": 605,
            "end": 610
          },
          "optional": false,
          "computed": true,
          "start": 598,
          "end": 611
        },
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 614,
          "end": 615
        },
        "start": 598,
        "end": 615
      },
      "directive": null,
      "start": 598,
      "end": 615
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "arrow",
              "optional": false,
              "typeAnnotation": null,
              "start": 630,
              "end": 635
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 644,
                "end": 646
              },
              "id": null,
              "generator": false,
              "start": 638,
              "end": 646
            },
            "definite": false,
            "start": 630,
            "end": 646
          }
        ],
        "declare": false,
        "start": 624,
        "end": 646
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 617,
      "end": 646
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
            "name": "arrow",
            "optional": false,
            "typeAnnotation": null,
            "start": 647,
            "end": 652
          },
          "property": {
            "type": "Literal",
            "value": "B",
            "raw": "\"B\"",
            "start": 653,
            "end": 656
          },
          "optional": false,
          "computed": true,
          "start": 647,
          "end": 657
        },
        "right": {
          "type": "Literal",
          "value": "bar",
          "raw": "'bar'",
          "start": 660,
          "end": 665
        },
        "start": 647,
        "end": 665
      },
      "directive": null,
      "start": 647,
      "end": 665
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "arrow2",
              "optional": false,
              "typeAnnotation": null,
              "start": 680,
              "end": 686
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 695,
                "end": 697
              },
              "id": null,
              "generator": false,
              "start": 689,
              "end": 697
            },
            "definite": false,
            "start": 680,
            "end": 697
          }
        ],
        "declare": false,
        "start": 674,
        "end": 697
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 667,
      "end": 697
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
            "name": "arrow2",
            "optional": false,
            "typeAnnotation": null,
            "start": 698,
            "end": 704
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 705,
            "end": 706
          },
          "optional": false,
          "computed": true,
          "start": 698,
          "end": 707
        },
        "right": {
          "type": "Literal",
          "value": 100,
          "raw": "100",
          "start": 710,
          "end": 713
        },
        "start": 698,
        "end": 713
      },
      "directive": null,
      "start": 698,
      "end": 713
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "arrow3",
              "optional": false,
              "typeAnnotation": null,
              "start": 728,
              "end": 734
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 743,
                "end": 745
              },
              "id": null,
              "generator": false,
              "start": 737,
              "end": 745
            },
            "definite": false,
            "start": 728,
            "end": 745
          }
        ],
        "declare": false,
        "start": 722,
        "end": 745
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 715,
      "end": 745
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
            "name": "arrow3",
            "optional": false,
            "typeAnnotation": null,
            "start": 746,
            "end": 752
          },
          "property": {
            "type": "Literal",
            "value": 77,
            "raw": "77",
            "start": 753,
            "end": 755
          },
          "optional": false,
          "computed": true,
          "start": 746,
          "end": 756
        },
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 759,
          "end": 760
        },
        "start": 746,
        "end": 760
      },
      "directive": null,
      "start": 746,
      "end": 760
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "arrow4",
              "optional": false,
              "typeAnnotation": null,
              "start": 775,
              "end": 781
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 790,
                "end": 792
              },
              "id": null,
              "generator": false,
              "start": 784,
              "end": 792
            },
            "definite": false,
            "start": 775,
            "end": 792
          }
        ],
        "declare": false,
        "start": 769,
        "end": 792
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 762,
      "end": 792
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
            "name": "arrow4",
            "optional": false,
            "typeAnnotation": null,
            "start": 793,
            "end": 799
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "num",
            "optional": false,
            "typeAnnotation": null,
            "start": 800,
            "end": 803
          },
          "optional": false,
          "computed": true,
          "start": 793,
          "end": 804
        },
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 807,
          "end": 808
        },
        "start": 793,
        "end": 808
      },
      "directive": null,
      "start": 793,
      "end": 808
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "arrow5",
              "optional": false,
              "typeAnnotation": null,
              "start": 823,
              "end": 829
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 838,
                "end": 840
              },
              "id": null,
              "generator": false,
              "start": 832,
              "end": 840
            },
            "definite": false,
            "start": 823,
            "end": 840
          }
        ],
        "declare": false,
        "start": 817,
        "end": 840
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 810,
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
            "name": "arrow5",
            "optional": false,
            "typeAnnotation": null,
            "start": 841,
            "end": 847
          },
          "property": {
            "type": "Literal",
            "value": "101",
            "raw": "\"101\"",
            "start": 848,
            "end": 853
          },
          "optional": false,
          "computed": true,
          "start": 841,
          "end": 854
        },
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 857,
          "end": 858
        },
        "start": 841,
        "end": 858
      },
      "directive": null,
      "start": 841,
      "end": 858
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "arrow6",
              "optional": false,
              "typeAnnotation": null,
              "start": 873,
              "end": 879
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 888,
                "end": 890
              },
              "id": null,
              "generator": false,
              "start": 882,
              "end": 890
            },
            "definite": false,
            "start": 873,
            "end": 890
          }
        ],
        "declare": false,
        "start": 867,
        "end": 890
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 860,
      "end": 890
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
            "name": "arrow6",
            "optional": false,
            "typeAnnotation": null,
            "start": 891,
            "end": 897
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "numStr",
            "optional": false,
            "typeAnnotation": null,
            "start": 898,
            "end": 904
          },
          "optional": false,
          "computed": true,
          "start": 891,
          "end": 905
        },
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 908,
          "end": 909
        },
        "start": 891,
        "end": 909
      },
      "directive": null,
      "start": 891,
      "end": 909
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "arrow7",
              "optional": false,
              "typeAnnotation": null,
              "start": 924,
              "end": 930
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 939,
                "end": 941
              },
              "id": null,
              "generator": false,
              "start": 933,
              "end": 941
            },
            "definite": false,
            "start": 924,
            "end": 941
          }
        ],
        "declare": false,
        "start": 918,
        "end": 941
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 911,
      "end": 941
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
            "name": "arrow7",
            "optional": false,
            "typeAnnotation": null,
            "start": 942,
            "end": 948
          },
          "property": {
            "type": "Literal",
            "value": "qwe rty",
            "raw": "\"qwe rty\"",
            "start": 949,
            "end": 958
          },
          "optional": false,
          "computed": true,
          "start": 942,
          "end": 959
        },
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 962,
          "end": 963
        },
        "start": 942,
        "end": 963
      },
      "directive": null,
      "start": 942,
      "end": 963
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "arrow8",
              "optional": false,
              "typeAnnotation": null,
              "start": 978,
              "end": 984
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 993,
                "end": 995
              },
              "id": null,
              "generator": false,
              "start": 987,
              "end": 995
            },
            "definite": false,
            "start": 978,
            "end": 995
          }
        ],
        "declare": false,
        "start": 972,
        "end": 995
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 965,
      "end": 995
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
            "name": "arrow8",
            "optional": false,
            "typeAnnotation": null,
            "start": 996,
            "end": 1002
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "withWhitespace",
            "optional": false,
            "typeAnnotation": null,
            "start": 1003,
            "end": 1017
          },
          "optional": false,
          "computed": true,
          "start": 996,
          "end": 1018
        },
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 1021,
          "end": 1022
        },
        "start": 996,
        "end": 1022
      },
      "directive": null,
      "start": 996,
      "end": 1022
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "arrow9",
              "optional": false,
              "typeAnnotation": null,
              "start": 1037,
              "end": 1043
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 1052,
                "end": 1054
              },
              "id": null,
              "generator": false,
              "start": 1046,
              "end": 1054
            },
            "definite": false,
            "start": 1037,
            "end": 1054
          }
        ],
        "declare": false,
        "start": 1031,
        "end": 1054
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1024,
      "end": 1054
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
            "name": "arrow9",
            "optional": false,
            "typeAnnotation": null,
            "start": 1055,
            "end": 1061
          },
          "property": {
            "type": "Literal",
            "value": "🤪",
            "raw": "\"🤪\"",
            "start": 1062,
            "end": 1066
          },
          "optional": false,
          "computed": true,
          "start": 1055,
          "end": 1067
        },
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 1070,
          "end": 1071
        },
        "start": 1055,
        "end": 1071
      },
      "directive": null,
      "start": 1055,
      "end": 1071
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "arrow10",
              "optional": false,
              "typeAnnotation": null,
              "start": 1086,
              "end": 1093
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 1102,
                "end": 1104
              },
              "id": null,
              "generator": false,
              "start": 1096,
              "end": 1104
            },
            "definite": false,
            "start": 1086,
            "end": 1104
          }
        ],
        "declare": false,
        "start": 1080,
        "end": 1104
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1073,
      "end": 1104
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
            "name": "arrow10",
            "optional": false,
            "typeAnnotation": null,
            "start": 1105,
            "end": 1112
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "emoji",
            "optional": false,
            "typeAnnotation": null,
            "start": 1113,
            "end": 1118
          },
          "optional": false,
          "computed": true,
          "start": 1105,
          "end": 1119
        },
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 1122,
          "end": 1123
        },
        "start": 1105,
        "end": 1123
      },
      "directive": null,
      "start": 1105,
      "end": 1123
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 57,
  "end": 1123
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 57,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 65,
    "end": 66
  },
  {
    "type": "String",
    "value": "\"C\"",
    "start": 67,
    "end": 70
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 71,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 77,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 81,
    "end": 82
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 83,
    "end": 84
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 85,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "numStr",
    "start": 91,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 98,
    "end": 99
  },
  {
    "type": "String",
    "value": "\"10\"",
    "start": 100,
    "end": 104
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 105,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "withWhitespace",
    "start": 111,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 126,
    "end": 127
  },
  {
    "type": "String",
    "value": "\"foo bar\"",
    "start": 128,
    "end": 137
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 138,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "emoji",
    "start": 144,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 150,
    "end": 151
  },
  {
    "type": "String",
    "value": "\"🤷‍♂️\"",
    "start": 152,
    "end": 159
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 161,
    "end": 167
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 168,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "decl",
    "start": 177,
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
    "value": "{",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 185,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "decl",
    "start": 187,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 191,
    "end": 192
  },
  {
    "type": "String",
    "value": "\"B\"",
    "start": 192,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 197,
    "end": 198
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 199,
    "end": 204
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 206,
    "end": 212
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 213,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "decl2",
    "start": 222,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 227,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 228,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 230,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 231,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "decl2",
    "start": 233,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 238,
    "end": 239
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 239,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 240,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 242,
    "end": 243
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 244,
    "end": 245
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 247,
    "end": 253
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 254,
    "end": 262
  },
  {
    "type": "Identifier",
    "value": "decl3",
    "start": 263,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 268,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 269,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 271,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 272,
    "end": 273
  },
  {
    "type": "Identifier",
    "value": "decl3",
    "start": 274,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 279,
    "end": 280
  },
  {
    "type": "Numeric",
    "value": "77",
    "start": 280,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 282,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 284,
    "end": 285
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 286,
    "end": 287
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 289,
    "end": 295
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 296,
    "end": 304
  },
  {
    "type": "Identifier",
    "value": "decl4",
    "start": 305,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 310,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 311,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 313,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 314,
    "end": 315
  },
  {
    "type": "Identifier",
    "value": "decl4",
    "start": 316,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 321,
    "end": 322
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 322,
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
    "value": "=",
    "start": 327,
    "end": 328
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 329,
    "end": 330
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 332,
    "end": 338
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 339,
    "end": 347
  },
  {
    "type": "Identifier",
    "value": "decl5",
    "start": 348,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 353,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 354,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 356,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 357,
    "end": 358
  },
  {
    "type": "Identifier",
    "value": "decl5",
    "start": 359,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 364,
    "end": 365
  },
  {
    "type": "String",
    "value": "\"101\"",
    "start": 365,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 370,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 372,
    "end": 373
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 374,
    "end": 375
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 377,
    "end": 383
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 384,
    "end": 392
  },
  {
    "type": "Identifier",
    "value": "decl6",
    "start": 393,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 398,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 399,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 401,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 402,
    "end": 403
  },
  {
    "type": "Identifier",
    "value": "decl6",
    "start": 404,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 409,
    "end": 410
  },
  {
    "type": "Identifier",
    "value": "numStr",
    "start": 410,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 416,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 418,
    "end": 419
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 420,
    "end": 421
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 423,
    "end": 429
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 430,
    "end": 438
  },
  {
    "type": "Identifier",
    "value": "decl7",
    "start": 439,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 444,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 445,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 447,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 448,
    "end": 449
  },
  {
    "type": "Identifier",
    "value": "decl7",
    "start": 450,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 455,
    "end": 456
  },
  {
    "type": "String",
    "value": "\"qwe rty\"",
    "start": 456,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 465,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 467,
    "end": 468
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 469,
    "end": 470
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 472,
    "end": 478
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 479,
    "end": 487
  },
  {
    "type": "Identifier",
    "value": "decl8",
    "start": 488,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 493,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 494,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 496,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 497,
    "end": 498
  },
  {
    "type": "Identifier",
    "value": "decl8",
    "start": 499,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 504,
    "end": 505
  },
  {
    "type": "Identifier",
    "value": "withWhitespace",
    "start": 505,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 519,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 521,
    "end": 522
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 523,
    "end": 524
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 526,
    "end": 532
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 533,
    "end": 541
  },
  {
    "type": "Identifier",
    "value": "decl9",
    "start": 542,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 547,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 548,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 550,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 551,
    "end": 552
  },
  {
    "type": "Identifier",
    "value": "decl9",
    "start": 553,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 558,
    "end": 559
  },
  {
    "type": "String",
    "value": "\"🤪\"",
    "start": 559,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 563,
    "end": 564
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 565,
    "end": 566
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 567,
    "end": 568
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 570,
    "end": 576
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 577,
    "end": 585
  },
  {
    "type": "Identifier",
    "value": "decl10",
    "start": 586,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 592,
    "end": 593
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 593,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 595,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 596,
    "end": 597
  },
  {
    "type": "Identifier",
    "value": "decl10",
    "start": 598,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 604,
    "end": 605
  },
  {
    "type": "Identifier",
    "value": "emoji",
    "start": 605,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 610,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 612,
    "end": 613
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 614,
    "end": 615
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 617,
    "end": 623
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 624,
    "end": 629
  },
  {
    "type": "Identifier",
    "value": "arrow",
    "start": 630,
    "end": 635
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 636,
    "end": 637
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 638,
    "end": 639
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 639,
    "end": 640
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 641,
    "end": 643
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 644,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 645,
    "end": 646
  },
  {
    "type": "Identifier",
    "value": "arrow",
    "start": 647,
    "end": 652
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 652,
    "end": 653
  },
  {
    "type": "String",
    "value": "\"B\"",
    "start": 653,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 656,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 658,
    "end": 659
  },
  {
    "type": "String",
    "value": "'bar'",
    "start": 660,
    "end": 665
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 667,
    "end": 673
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 674,
    "end": 679
  },
  {
    "type": "Identifier",
    "value": "arrow2",
    "start": 680,
    "end": 686
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 687,
    "end": 688
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 689,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 690,
    "end": 691
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 692,
    "end": 694
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 695,
    "end": 696
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 696,
    "end": 697
  },
  {
    "type": "Identifier",
    "value": "arrow2",
    "start": 698,
    "end": 704
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 704,
    "end": 705
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 705,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 706,
    "end": 707
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 708,
    "end": 709
  },
  {
    "type": "Numeric",
    "value": "100",
    "start": 710,
    "end": 713
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 715,
    "end": 721
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 722,
    "end": 727
  },
  {
    "type": "Identifier",
    "value": "arrow3",
    "start": 728,
    "end": 734
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 735,
    "end": 736
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 737,
    "end": 738
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 738,
    "end": 739
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 740,
    "end": 742
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 743,
    "end": 744
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 744,
    "end": 745
  },
  {
    "type": "Identifier",
    "value": "arrow3",
    "start": 746,
    "end": 752
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 752,
    "end": 753
  },
  {
    "type": "Numeric",
    "value": "77",
    "start": 753,
    "end": 755
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 755,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 757,
    "end": 758
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 759,
    "end": 760
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 762,
    "end": 768
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 769,
    "end": 774
  },
  {
    "type": "Identifier",
    "value": "arrow4",
    "start": 775,
    "end": 781
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 782,
    "end": 783
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 784,
    "end": 785
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 785,
    "end": 786
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 787,
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
    "type": "Identifier",
    "value": "arrow4",
    "start": 793,
    "end": 799
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 799,
    "end": 800
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 800,
    "end": 803
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 803,
    "end": 804
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 805,
    "end": 806
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 807,
    "end": 808
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 810,
    "end": 816
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 817,
    "end": 822
  },
  {
    "type": "Identifier",
    "value": "arrow5",
    "start": 823,
    "end": 829
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 830,
    "end": 831
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 832,
    "end": 833
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 833,
    "end": 834
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 835,
    "end": 837
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 838,
    "end": 839
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 839,
    "end": 840
  },
  {
    "type": "Identifier",
    "value": "arrow5",
    "start": 841,
    "end": 847
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 847,
    "end": 848
  },
  {
    "type": "String",
    "value": "\"101\"",
    "start": 848,
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
    "type": "Numeric",
    "value": "0",
    "start": 857,
    "end": 858
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 860,
    "end": 866
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 867,
    "end": 872
  },
  {
    "type": "Identifier",
    "value": "arrow6",
    "start": 873,
    "end": 879
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 880,
    "end": 881
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 882,
    "end": 883
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 883,
    "end": 884
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 885,
    "end": 887
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 888,
    "end": 889
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 889,
    "end": 890
  },
  {
    "type": "Identifier",
    "value": "arrow6",
    "start": 891,
    "end": 897
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 897,
    "end": 898
  },
  {
    "type": "Identifier",
    "value": "numStr",
    "start": 898,
    "end": 904
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 904,
    "end": 905
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 906,
    "end": 907
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 908,
    "end": 909
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 911,
    "end": 917
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 918,
    "end": 923
  },
  {
    "type": "Identifier",
    "value": "arrow7",
    "start": 924,
    "end": 930
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 931,
    "end": 932
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 933,
    "end": 934
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 934,
    "end": 935
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 936,
    "end": 938
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 939,
    "end": 940
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 940,
    "end": 941
  },
  {
    "type": "Identifier",
    "value": "arrow7",
    "start": 942,
    "end": 948
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 948,
    "end": 949
  },
  {
    "type": "String",
    "value": "\"qwe rty\"",
    "start": 949,
    "end": 958
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 958,
    "end": 959
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 960,
    "end": 961
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 962,
    "end": 963
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 965,
    "end": 971
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 972,
    "end": 977
  },
  {
    "type": "Identifier",
    "value": "arrow8",
    "start": 978,
    "end": 984
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 985,
    "end": 986
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 987,
    "end": 988
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 988,
    "end": 989
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 990,
    "end": 992
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 993,
    "end": 994
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 994,
    "end": 995
  },
  {
    "type": "Identifier",
    "value": "arrow8",
    "start": 996,
    "end": 1002
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1002,
    "end": 1003
  },
  {
    "type": "Identifier",
    "value": "withWhitespace",
    "start": 1003,
    "end": 1017
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1017,
    "end": 1018
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1019,
    "end": 1020
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1021,
    "end": 1022
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1024,
    "end": 1030
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1031,
    "end": 1036
  },
  {
    "type": "Identifier",
    "value": "arrow9",
    "start": 1037,
    "end": 1043
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1044,
    "end": 1045
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1046,
    "end": 1047
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1047,
    "end": 1048
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1049,
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
    "type": "Identifier",
    "value": "arrow9",
    "start": 1055,
    "end": 1061
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1061,
    "end": 1062
  },
  {
    "type": "String",
    "value": "\"🤪\"",
    "start": 1062,
    "end": 1066
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1066,
    "end": 1067
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1068,
    "end": 1069
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1070,
    "end": 1071
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1073,
    "end": 1079
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1080,
    "end": 1085
  },
  {
    "type": "Identifier",
    "value": "arrow10",
    "start": 1086,
    "end": 1093
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1094,
    "end": 1095
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1096,
    "end": 1097
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1097,
    "end": 1098
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1099,
    "end": 1101
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1102,
    "end": 1103
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1103,
    "end": 1104
  },
  {
    "type": "Identifier",
    "value": "arrow10",
    "start": 1105,
    "end": 1112
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1112,
    "end": 1113
  },
  {
    "type": "Identifier",
    "value": "emoji",
    "start": 1113,
    "end": 1118
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1118,
    "end": 1119
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1120,
    "end": 1121
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1122,
    "end": 1123
  }
]
```
