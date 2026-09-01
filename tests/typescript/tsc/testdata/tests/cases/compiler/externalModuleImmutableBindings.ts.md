__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
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
              "typeAnnotation": null,
              "start": 11,
              "end": 12
            },
            "init": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 15,
              "end": 16
            },
            "definite": false,
            "start": 11,
            "end": 16
          }
        ],
        "declare": false,
        "start": 7,
        "end": 17
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 17
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 18
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 0,
    "end": 6
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 11,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 13,
    "end": 14
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 15,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 16,
    "end": 17
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "stuff",
            "optional": false,
            "typeAnnotation": null,
            "start": 67,
            "end": 72
          },
          "start": 62,
          "end": 72
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./f1",
        "raw": "'./f1'",
        "start": 78,
        "end": 84
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 55,
      "end": 85
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
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 91,
            "end": 92
          },
          "init": {
            "type": "Literal",
            "value": "baz",
            "raw": "'baz'",
            "start": 95,
            "end": 100
          },
          "definite": false,
          "start": 91,
          "end": 100
        }
      ],
      "declare": false,
      "start": 87,
      "end": 101
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
            "name": "stuff",
            "optional": false,
            "typeAnnotation": null,
            "start": 103,
            "end": 108
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 109,
            "end": 110
          },
          "optional": false,
          "computed": false,
          "start": 103,
          "end": 110
        },
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 113,
          "end": 114
        },
        "start": 103,
        "end": 114
      },
      "directive": null,
      "start": 103,
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
            "name": "stuff",
            "optional": false,
            "typeAnnotation": null,
            "start": 116,
            "end": 121
          },
          "property": {
            "type": "Literal",
            "value": "x",
            "raw": "'x'",
            "start": 122,
            "end": 125
          },
          "optional": false,
          "computed": true,
          "start": 116,
          "end": 126
        },
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 129,
          "end": 130
        },
        "start": 116,
        "end": 130
      },
      "directive": null,
      "start": 116,
      "end": 131
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
            "name": "stuff",
            "optional": false,
            "typeAnnotation": null,
            "start": 132,
            "end": 137
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "blah",
            "optional": false,
            "typeAnnotation": null,
            "start": 138,
            "end": 142
          },
          "optional": false,
          "computed": false,
          "start": 132,
          "end": 142
        },
        "right": {
          "type": "Literal",
          "value": 2,
          "raw": "2",
          "start": 145,
          "end": 146
        },
        "start": 132,
        "end": 146
      },
      "directive": null,
      "start": 132,
      "end": 147
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
            "name": "stuff",
            "optional": false,
            "typeAnnotation": null,
            "start": 148,
            "end": 153
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 154,
            "end": 155
          },
          "optional": false,
          "computed": true,
          "start": 148,
          "end": 156
        },
        "right": {
          "type": "Literal",
          "value": 3,
          "raw": "3",
          "start": 159,
          "end": 160
        },
        "start": 148,
        "end": 160
      },
      "directive": null,
      "start": 148,
      "end": 161
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "stuff",
            "optional": false,
            "typeAnnotation": null,
            "start": 163,
            "end": 168
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 169,
            "end": 170
          },
          "optional": false,
          "computed": false,
          "start": 163,
          "end": 170
        },
        "start": 163,
        "end": 172
      },
      "directive": null,
      "start": 163,
      "end": 173
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "stuff",
            "optional": false,
            "typeAnnotation": null,
            "start": 174,
            "end": 179
          },
          "property": {
            "type": "Literal",
            "value": "x",
            "raw": "'x'",
            "start": 180,
            "end": 183
          },
          "optional": false,
          "computed": true,
          "start": 174,
          "end": 184
        },
        "start": 174,
        "end": 186
      },
      "directive": null,
      "start": 174,
      "end": 187
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "stuff",
            "optional": false,
            "typeAnnotation": null,
            "start": 188,
            "end": 193
          },
          "property": {
            "type": "Literal",
            "value": "blah",
            "raw": "'blah'",
            "start": 194,
            "end": 200
          },
          "optional": false,
          "computed": true,
          "start": 188,
          "end": 201
        },
        "start": 188,
        "end": 203
      },
      "directive": null,
      "start": 188,
      "end": 204
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "stuff",
            "optional": false,
            "typeAnnotation": null,
            "start": 205,
            "end": 210
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 211,
            "end": 212
          },
          "optional": false,
          "computed": true,
          "start": 205,
          "end": 213
        },
        "start": 205,
        "end": 215
      },
      "directive": null,
      "start": 205,
      "end": 216
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
            "name": "stuff",
            "optional": false,
            "typeAnnotation": null,
            "start": 219,
            "end": 224
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 225,
            "end": 226
          },
          "optional": false,
          "computed": false,
          "start": 219,
          "end": 226
        },
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 230,
          "end": 231
        },
        "start": 218,
        "end": 231
      },
      "directive": null,
      "start": 218,
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
            "name": "stuff",
            "optional": false,
            "typeAnnotation": null,
            "start": 234,
            "end": 239
          },
          "property": {
            "type": "Literal",
            "value": "x",
            "raw": "'x'",
            "start": 240,
            "end": 243
          },
          "optional": false,
          "computed": true,
          "start": 234,
          "end": 244
        },
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 248,
          "end": 249
        },
        "start": 233,
        "end": 249
      },
      "directive": null,
      "start": 233,
      "end": 250
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
            "name": "stuff",
            "optional": false,
            "typeAnnotation": null,
            "start": 252,
            "end": 257
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "blah",
            "optional": false,
            "typeAnnotation": null,
            "start": 258,
            "end": 262
          },
          "optional": false,
          "computed": false,
          "start": 252,
          "end": 262
        },
        "right": {
          "type": "Literal",
          "value": 2,
          "raw": "2",
          "start": 266,
          "end": 267
        },
        "start": 251,
        "end": 267
      },
      "directive": null,
      "start": 251,
      "end": 268
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
            "name": "stuff",
            "optional": false,
            "typeAnnotation": null,
            "start": 270,
            "end": 275
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 276,
            "end": 277
          },
          "optional": false,
          "computed": true,
          "start": 270,
          "end": 278
        },
        "right": {
          "type": "Literal",
          "value": 3,
          "raw": "3",
          "start": 282,
          "end": 283
        },
        "start": 269,
        "end": 283
      },
      "directive": null,
      "start": 269,
      "end": 284
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "stuff",
            "optional": false,
            "typeAnnotation": null,
            "start": 287,
            "end": 292
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 293,
            "end": 294
          },
          "optional": false,
          "computed": false,
          "start": 287,
          "end": 294
        },
        "start": 286,
        "end": 297
      },
      "directive": null,
      "start": 286,
      "end": 298
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "stuff",
            "optional": false,
            "typeAnnotation": null,
            "start": 300,
            "end": 305
          },
          "property": {
            "type": "Literal",
            "value": "x",
            "raw": "'x'",
            "start": 306,
            "end": 309
          },
          "optional": false,
          "computed": true,
          "start": 300,
          "end": 310
        },
        "start": 299,
        "end": 313
      },
      "directive": null,
      "start": 299,
      "end": 314
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "stuff",
            "optional": false,
            "typeAnnotation": null,
            "start": 316,
            "end": 321
          },
          "property": {
            "type": "Literal",
            "value": "blah",
            "raw": "'blah'",
            "start": 322,
            "end": 328
          },
          "optional": false,
          "computed": true,
          "start": 316,
          "end": 329
        },
        "start": 315,
        "end": 332
      },
      "directive": null,
      "start": 315,
      "end": 333
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "stuff",
            "optional": false,
            "typeAnnotation": null,
            "start": 335,
            "end": 340
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 341,
            "end": 342
          },
          "optional": false,
          "computed": true,
          "start": 335,
          "end": 343
        },
        "start": 334,
        "end": 346
      },
      "directive": null,
      "start": 334,
      "end": 347
    },
    {
      "type": "ForInStatement",
      "left": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "stuff",
          "optional": false,
          "typeAnnotation": null,
          "start": 354,
          "end": 359
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 360,
          "end": 361
        },
        "optional": false,
        "computed": false,
        "start": 354,
        "end": 361
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [],
        "start": 365,
        "end": 367
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 369,
        "end": 371
      },
      "start": 349,
      "end": 371
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "stuff",
          "optional": false,
          "typeAnnotation": null,
          "start": 377,
          "end": 382
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 383,
          "end": 384
        },
        "optional": false,
        "computed": false,
        "start": 377,
        "end": 384
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [],
        "start": 388,
        "end": 390
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 392,
        "end": 394
      },
      "start": 372,
      "end": 394
    },
    {
      "type": "ForInStatement",
      "left": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "stuff",
          "optional": false,
          "typeAnnotation": null,
          "start": 400,
          "end": 405
        },
        "property": {
          "type": "Literal",
          "value": "x",
          "raw": "'x'",
          "start": 406,
          "end": 409
        },
        "optional": false,
        "computed": true,
        "start": 400,
        "end": 410
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [],
        "start": 414,
        "end": 416
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 418,
        "end": 420
      },
      "start": 395,
      "end": 420
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "stuff",
          "optional": false,
          "typeAnnotation": null,
          "start": 426,
          "end": 431
        },
        "property": {
          "type": "Literal",
          "value": "x",
          "raw": "'x'",
          "start": 432,
          "end": 435
        },
        "optional": false,
        "computed": true,
        "start": 426,
        "end": 436
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [],
        "start": 440,
        "end": 442
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 444,
        "end": 446
      },
      "start": 421,
      "end": 446
    },
    {
      "type": "ForInStatement",
      "left": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "stuff",
          "optional": false,
          "typeAnnotation": null,
          "start": 452,
          "end": 457
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "blah",
          "optional": false,
          "typeAnnotation": null,
          "start": 458,
          "end": 462
        },
        "optional": false,
        "computed": false,
        "start": 452,
        "end": 462
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [],
        "start": 466,
        "end": 468
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 470,
        "end": 472
      },
      "start": 447,
      "end": 472
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "stuff",
          "optional": false,
          "typeAnnotation": null,
          "start": 478,
          "end": 483
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "blah",
          "optional": false,
          "typeAnnotation": null,
          "start": 484,
          "end": 488
        },
        "optional": false,
        "computed": false,
        "start": 478,
        "end": 488
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [],
        "start": 492,
        "end": 494
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 496,
        "end": 498
      },
      "start": 473,
      "end": 498
    },
    {
      "type": "ForInStatement",
      "left": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "stuff",
          "optional": false,
          "typeAnnotation": null,
          "start": 504,
          "end": 509
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": null,
          "start": 510,
          "end": 511
        },
        "optional": false,
        "computed": true,
        "start": 504,
        "end": 512
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [],
        "start": 516,
        "end": 518
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 520,
        "end": 522
      },
      "start": 499,
      "end": 522
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "stuff",
          "optional": false,
          "typeAnnotation": null,
          "start": 528,
          "end": 533
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": null,
          "start": 534,
          "end": 535
        },
        "optional": false,
        "computed": true,
        "start": 528,
        "end": 536
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [],
        "start": 540,
        "end": 542
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 544,
        "end": 546
      },
      "start": 523,
      "end": 546
    },
    {
      "type": "ForInStatement",
      "left": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "stuff",
          "optional": false,
          "typeAnnotation": null,
          "start": 554,
          "end": 559
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 560,
          "end": 561
        },
        "optional": false,
        "computed": false,
        "start": 554,
        "end": 561
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [],
        "start": 566,
        "end": 568
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 570,
        "end": 572
      },
      "start": 548,
      "end": 572
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "stuff",
          "optional": false,
          "typeAnnotation": null,
          "start": 579,
          "end": 584
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 585,
          "end": 586
        },
        "optional": false,
        "computed": false,
        "start": 579,
        "end": 586
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [],
        "start": 591,
        "end": 593
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 595,
        "end": 597
      },
      "start": 573,
      "end": 597
    },
    {
      "type": "ForInStatement",
      "left": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "stuff",
          "optional": false,
          "typeAnnotation": null,
          "start": 604,
          "end": 609
        },
        "property": {
          "type": "Literal",
          "value": "x",
          "raw": "'x'",
          "start": 610,
          "end": 613
        },
        "optional": false,
        "computed": true,
        "start": 604,
        "end": 614
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [],
        "start": 619,
        "end": 621
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 623,
        "end": 625
      },
      "start": 598,
      "end": 625
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "stuff",
          "optional": false,
          "typeAnnotation": null,
          "start": 632,
          "end": 637
        },
        "property": {
          "type": "Literal",
          "value": "x",
          "raw": "'x'",
          "start": 638,
          "end": 641
        },
        "optional": false,
        "computed": true,
        "start": 632,
        "end": 642
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [],
        "start": 647,
        "end": 649
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 651,
        "end": 653
      },
      "start": 626,
      "end": 653
    },
    {
      "type": "ForInStatement",
      "left": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "stuff",
          "optional": false,
          "typeAnnotation": null,
          "start": 660,
          "end": 665
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "blah",
          "optional": false,
          "typeAnnotation": null,
          "start": 666,
          "end": 670
        },
        "optional": false,
        "computed": false,
        "start": 660,
        "end": 670
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [],
        "start": 675,
        "end": 677
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 679,
        "end": 681
      },
      "start": 654,
      "end": 681
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "stuff",
          "optional": false,
          "typeAnnotation": null,
          "start": 688,
          "end": 693
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "blah",
          "optional": false,
          "typeAnnotation": null,
          "start": 694,
          "end": 698
        },
        "optional": false,
        "computed": false,
        "start": 688,
        "end": 698
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [],
        "start": 703,
        "end": 705
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 707,
        "end": 709
      },
      "start": 682,
      "end": 709
    },
    {
      "type": "ForInStatement",
      "left": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "stuff",
          "optional": false,
          "typeAnnotation": null,
          "start": 716,
          "end": 721
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": null,
          "start": 722,
          "end": 723
        },
        "optional": false,
        "computed": true,
        "start": 716,
        "end": 724
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [],
        "start": 729,
        "end": 731
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 733,
        "end": 735
      },
      "start": 710,
      "end": 735
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "stuff",
          "optional": false,
          "typeAnnotation": null,
          "start": 742,
          "end": 747
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": null,
          "start": 748,
          "end": 749
        },
        "optional": false,
        "computed": true,
        "start": 742,
        "end": 750
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [],
        "start": 755,
        "end": 757
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 759,
        "end": 761
      },
      "start": 736,
      "end": 761
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 55,
  "end": 763
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 55,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 62,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 64,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "stuff",
    "start": 67,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 73,
    "end": 77
  },
  {
    "type": "String",
    "value": "'./f1'",
    "start": 78,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 84,
    "end": 85
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 87,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 93,
    "end": 94
  },
  {
    "type": "String",
    "value": "'baz'",
    "start": 95,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 100,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "stuff",
    "start": 103,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 108,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 111,
    "end": 112
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 114,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "stuff",
    "start": 116,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 121,
    "end": 122
  },
  {
    "type": "String",
    "value": "'x'",
    "start": 122,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 127,
    "end": 128
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 130,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "stuff",
    "start": 132,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 137,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "blah",
    "start": 138,
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
    "value": "2",
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
    "value": "stuff",
    "start": 148,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 153,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 157,
    "end": 158
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 160,
    "end": 161
  },
  {
    "type": "Identifier",
    "value": "stuff",
    "start": 163,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 168,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 169,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 170,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 172,
    "end": 173
  },
  {
    "type": "Identifier",
    "value": "stuff",
    "start": 174,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 179,
    "end": 180
  },
  {
    "type": "String",
    "value": "'x'",
    "start": 180,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 183,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 184,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 186,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "stuff",
    "start": 188,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 193,
    "end": 194
  },
  {
    "type": "String",
    "value": "'blah'",
    "start": 194,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 200,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 201,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 203,
    "end": 204
  },
  {
    "type": "Identifier",
    "value": "stuff",
    "start": 205,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 210,
    "end": 211
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 211,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 212,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 213,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 218,
    "end": 219
  },
  {
    "type": "Identifier",
    "value": "stuff",
    "start": 219,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 224,
    "end": 225
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 225,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 226,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 228,
    "end": 229
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 230,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 231,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 233,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "stuff",
    "start": 234,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 239,
    "end": 240
  },
  {
    "type": "String",
    "value": "'x'",
    "start": 240,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 243,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 244,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 246,
    "end": 247
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 248,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 249,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 251,
    "end": 252
  },
  {
    "type": "Identifier",
    "value": "stuff",
    "start": 252,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 257,
    "end": 258
  },
  {
    "type": "Identifier",
    "value": "blah",
    "start": 258,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 262,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 264,
    "end": 265
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 266,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 267,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 269,
    "end": 270
  },
  {
    "type": "Identifier",
    "value": "stuff",
    "start": 270,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 275,
    "end": 276
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 276,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 277,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 278,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 280,
    "end": 281
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 282,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 283,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 286,
    "end": 287
  },
  {
    "type": "Identifier",
    "value": "stuff",
    "start": 287,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 292,
    "end": 293
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 293,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 294,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 295,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 297,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 299,
    "end": 300
  },
  {
    "type": "Identifier",
    "value": "stuff",
    "start": 300,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 305,
    "end": 306
  },
  {
    "type": "String",
    "value": "'x'",
    "start": 306,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 309,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 310,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 311,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 313,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 315,
    "end": 316
  },
  {
    "type": "Identifier",
    "value": "stuff",
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
    "type": "String",
    "value": "'blah'",
    "start": 322,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 328,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 329,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 330,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 332,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 334,
    "end": 335
  },
  {
    "type": "Identifier",
    "value": "stuff",
    "start": 335,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 340,
    "end": 341
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 341,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 342,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 343,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 344,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 346,
    "end": 347
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 349,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 353,
    "end": 354
  },
  {
    "type": "Identifier",
    "value": "stuff",
    "start": 354,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 359,
    "end": 360
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 360,
    "end": 361
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 362,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 365,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 366,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 367,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 369,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 370,
    "end": 371
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 372,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 376,
    "end": 377
  },
  {
    "type": "Identifier",
    "value": "stuff",
    "start": 377,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 382,
    "end": 383
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 383,
    "end": 384
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 385,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 388,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 389,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 390,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 392,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 393,
    "end": 394
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 395,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 399,
    "end": 400
  },
  {
    "type": "Identifier",
    "value": "stuff",
    "start": 400,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 405,
    "end": 406
  },
  {
    "type": "String",
    "value": "'x'",
    "start": 406,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 409,
    "end": 410
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 411,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 414,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 415,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 416,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 418,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 419,
    "end": 420
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 421,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 425,
    "end": 426
  },
  {
    "type": "Identifier",
    "value": "stuff",
    "start": 426,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 431,
    "end": 432
  },
  {
    "type": "String",
    "value": "'x'",
    "start": 432,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 435,
    "end": 436
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 437,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 440,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 441,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 442,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 444,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 445,
    "end": 446
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 447,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 451,
    "end": 452
  },
  {
    "type": "Identifier",
    "value": "stuff",
    "start": 452,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 457,
    "end": 458
  },
  {
    "type": "Identifier",
    "value": "blah",
    "start": 458,
    "end": 462
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 463,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 466,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 467,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 468,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 470,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 471,
    "end": 472
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 473,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 477,
    "end": 478
  },
  {
    "type": "Identifier",
    "value": "stuff",
    "start": 478,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 483,
    "end": 484
  },
  {
    "type": "Identifier",
    "value": "blah",
    "start": 484,
    "end": 488
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 489,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 492,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "type": "Keyword",
    "value": "for",
    "start": 499,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 503,
    "end": 504
  },
  {
    "type": "Identifier",
    "value": "stuff",
    "start": 504,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 509,
    "end": 510
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 510,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 511,
    "end": 512
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 513,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 516,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 517,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 518,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 520,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 521,
    "end": 522
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 523,
    "end": 526
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 527,
    "end": 528
  },
  {
    "type": "Identifier",
    "value": "stuff",
    "start": 528,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 533,
    "end": 534
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 534,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 535,
    "end": 536
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 537,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 540,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 541,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 542,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 544,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 545,
    "end": 546
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 548,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 552,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 553,
    "end": 554
  },
  {
    "type": "Identifier",
    "value": "stuff",
    "start": 554,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 559,
    "end": 560
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 560,
    "end": 561
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 561,
    "end": 562
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 563,
    "end": 565
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 566,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 567,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 568,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 570,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 571,
    "end": 572
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 573,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 577,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 578,
    "end": 579
  },
  {
    "type": "Identifier",
    "value": "stuff",
    "start": 579,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 584,
    "end": 585
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 585,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 586,
    "end": 587
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 588,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 591,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "type": "Keyword",
    "value": "for",
    "start": 598,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 602,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 603,
    "end": 604
  },
  {
    "type": "Identifier",
    "value": "stuff",
    "start": 604,
    "end": 609
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 609,
    "end": 610
  },
  {
    "type": "String",
    "value": "'x'",
    "start": 610,
    "end": 613
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 613,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 614,
    "end": 615
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 616,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 619,
    "end": 620
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 620,
    "end": 621
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 621,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 623,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 624,
    "end": 625
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 626,
    "end": 629
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 630,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 631,
    "end": 632
  },
  {
    "type": "Identifier",
    "value": "stuff",
    "start": 632,
    "end": 637
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 637,
    "end": 638
  },
  {
    "type": "String",
    "value": "'x'",
    "start": 638,
    "end": 641
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 641,
    "end": 642
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 642,
    "end": 643
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 644,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 647,
    "end": 648
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 648,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 649,
    "end": 650
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 651,
    "end": 652
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 652,
    "end": 653
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 654,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 658,
    "end": 659
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 659,
    "end": 660
  },
  {
    "type": "Identifier",
    "value": "stuff",
    "start": 660,
    "end": 665
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 665,
    "end": 666
  },
  {
    "type": "Identifier",
    "value": "blah",
    "start": 666,
    "end": 670
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 670,
    "end": 671
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 672,
    "end": 674
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 675,
    "end": 676
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 676,
    "end": 677
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 677,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 679,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 680,
    "end": 681
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 682,
    "end": 685
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 686,
    "end": 687
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 687,
    "end": 688
  },
  {
    "type": "Identifier",
    "value": "stuff",
    "start": 688,
    "end": 693
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 693,
    "end": 694
  },
  {
    "type": "Identifier",
    "value": "blah",
    "start": 694,
    "end": 698
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 698,
    "end": 699
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 700,
    "end": 702
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 703,
    "end": 704
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 704,
    "end": 705
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 705,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 707,
    "end": 708
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 708,
    "end": 709
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 710,
    "end": 713
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 714,
    "end": 715
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 715,
    "end": 716
  },
  {
    "type": "Identifier",
    "value": "stuff",
    "start": 716,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 721,
    "end": 722
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 722,
    "end": 723
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 723,
    "end": 724
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 724,
    "end": 725
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 726,
    "end": 728
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 729,
    "end": 730
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "type": "Punctuator",
    "value": "}",
    "start": 734,
    "end": 735
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 736,
    "end": 739
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 740,
    "end": 741
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 741,
    "end": 742
  },
  {
    "type": "Identifier",
    "value": "stuff",
    "start": 742,
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
    "value": "n",
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
    "value": ")",
    "start": 750,
    "end": 751
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 752,
    "end": 754
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 755,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 756,
    "end": 757
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 757,
    "end": 758
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 759,
    "end": 760
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 760,
    "end": 761
  }
]
```
