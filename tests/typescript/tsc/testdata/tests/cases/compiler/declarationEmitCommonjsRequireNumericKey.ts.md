__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
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
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 0,
            "end": 7
          },
          "property": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 8,
            "end": 9
          },
          "optional": false,
          "computed": true,
          "start": 0,
          "end": 10
        },
        "right": {
          "type": "Literal",
          "value": 123,
          "raw": "123",
          "start": 13,
          "end": 16
        },
        "start": 0,
        "end": 16
      },
      "directive": null,
      "start": 0,
      "end": 17
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
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 18,
            "end": 25
          },
          "property": {
            "type": "Literal",
            "value": "a b",
            "raw": "\"a b\"",
            "start": 26,
            "end": 31
          },
          "optional": false,
          "computed": true,
          "start": 18,
          "end": 32
        },
        "right": {
          "type": "Literal",
          "value": "text",
          "raw": "\"text\"",
          "start": 35,
          "end": 41
        },
        "start": 18,
        "end": 41
      },
      "directive": null,
      "start": 18,
      "end": 42
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
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 43,
            "end": 50
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "named",
            "optional": false,
            "typeAnnotation": null,
            "start": 51,
            "end": 56
          },
          "optional": false,
          "computed": false,
          "start": 43,
          "end": 56
        },
        "right": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 59,
          "end": 63
        },
        "start": 43,
        "end": 63
      },
      "directive": null,
      "start": 43,
      "end": 64
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
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 65,
            "end": 72
          },
          "property": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 73,
            "end": 74
          },
          "optional": false,
          "computed": true,
          "start": 65,
          "end": 75
        },
        "right": {
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
                "start": 80,
                "end": 85
              },
              "value": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 87,
                "end": 88
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 80,
              "end": 88
            }
          ],
          "start": 78,
          "end": 90
        },
        "start": 65,
        "end": 90
      },
      "directive": null,
      "start": 65,
      "end": 91
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
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 92,
            "end": 99
          },
          "property": {
            "type": "Literal",
            "value": "-0",
            "raw": "\"-0\"",
            "start": 100,
            "end": 104
          },
          "optional": false,
          "computed": true,
          "start": 92,
          "end": 105
        },
        "right": {
          "type": "Literal",
          "value": "negative zero",
          "raw": "\"negative zero\"",
          "start": 108,
          "end": 123
        },
        "start": 92,
        "end": 123
      },
      "directive": null,
      "start": 92,
      "end": 124
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 125
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "exports",
    "start": 0,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 7,
    "end": 8
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 9,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 11,
    "end": 12
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 13,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 16,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 18,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 25,
    "end": 26
  },
  {
    "type": "String",
    "value": "\"a b\"",
    "start": 26,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 31,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 33,
    "end": 34
  },
  {
    "type": "String",
    "value": "\"text\"",
    "start": 35,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 41,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 43,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 50,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "named",
    "start": 51,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 57,
    "end": 58
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 59,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 63,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 65,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 72,
    "end": 73
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 78,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 80,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 85,
    "end": 86
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 89,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 90,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 92,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 99,
    "end": 100
  },
  {
    "type": "String",
    "value": "\"-0\"",
    "start": 100,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 104,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 106,
    "end": 107
  },
  {
    "type": "String",
    "value": "\"negative zero\"",
    "start": 108,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 123,
    "end": 124
  }
]
```
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
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 7,
                  "end": 8
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numeric",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 10,
                  "end": 17
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 7,
                "end": 17
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": "a b",
                  "raw": "\"a b\"",
                  "start": 19,
                  "end": 24
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "text",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 26,
                  "end": 30
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 19,
                "end": 30
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "named",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 32,
                  "end": 37
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "named",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 32,
                  "end": 37
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 32,
                "end": 37
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 38
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null,
              "start": 41,
              "end": 48
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "./a",
                "raw": "\"./a\"",
                "start": 49,
                "end": 54
              }
            ],
            "optional": false,
            "start": 41,
            "end": 55
          },
          "definite": false,
          "start": 6,
          "end": 55
        }
      ],
      "declare": false,
      "start": 0,
      "end": 56
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 65,
                  "end": 66
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "computedNumeric",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 69,
                  "end": 84
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 64,
                "end": 84
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "TemplateLiteral",
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "a b",
                        "cooked": "a b"
                      },
                      "tail": true,
                      "start": 87,
                      "end": 92
                    }
                  ],
                  "expressions": [],
                  "start": 87,
                  "end": 92
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "computedTemplate",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 95,
                  "end": 111
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 86,
                "end": 111
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 63,
            "end": 112
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null,
              "start": 115,
              "end": 122
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "./a",
                "raw": "\"./a\"",
                "start": 123,
                "end": 128
              }
            ],
            "optional": false,
            "start": 115,
            "end": 129
          },
          "definite": false,
          "start": 63,
          "end": 129
        }
      ],
      "declare": false,
      "start": 57,
      "end": 130
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
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 131,
            "end": 138
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "numeric",
            "optional": false,
            "typeAnnotation": null,
            "start": 139,
            "end": 146
          },
          "optional": false,
          "computed": false,
          "start": 131,
          "end": 146
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "numeric",
          "optional": false,
          "typeAnnotation": null,
          "start": 149,
          "end": 156
        },
        "start": 131,
        "end": 156
      },
      "directive": null,
      "start": 131,
      "end": 157
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
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 158,
            "end": 165
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "text",
            "optional": false,
            "typeAnnotation": null,
            "start": 166,
            "end": 170
          },
          "optional": false,
          "computed": false,
          "start": 158,
          "end": 170
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "text",
          "optional": false,
          "typeAnnotation": null,
          "start": 173,
          "end": 177
        },
        "start": 158,
        "end": 177
      },
      "directive": null,
      "start": 158,
      "end": 178
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
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 179,
            "end": 186
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "named",
            "optional": false,
            "typeAnnotation": null,
            "start": 187,
            "end": 192
          },
          "optional": false,
          "computed": false,
          "start": 179,
          "end": 192
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "named",
          "optional": false,
          "typeAnnotation": null,
          "start": 195,
          "end": 200
        },
        "start": 179,
        "end": 200
      },
      "directive": null,
      "start": 179,
      "end": 201
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
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 202,
            "end": 209
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "computedNumeric",
            "optional": false,
            "typeAnnotation": null,
            "start": 210,
            "end": 225
          },
          "optional": false,
          "computed": false,
          "start": 202,
          "end": 225
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "computedNumeric",
          "optional": false,
          "typeAnnotation": null,
          "start": 228,
          "end": 243
        },
        "start": 202,
        "end": 243
      },
      "directive": null,
      "start": 202,
      "end": 244
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
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 245,
            "end": 252
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "computedTemplate",
            "optional": false,
            "typeAnnotation": null,
            "start": 253,
            "end": 269
          },
          "optional": false,
          "computed": false,
          "start": 245,
          "end": 269
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "computedTemplate",
          "optional": false,
          "typeAnnotation": null,
          "start": 272,
          "end": 288
        },
        "start": 245,
        "end": 288
      },
      "directive": null,
      "start": 245,
      "end": 289
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "UnaryExpression",
                  "operator": "-",
                  "argument": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 300,
                    "end": 301
                  },
                  "prefix": true,
                  "start": 299,
                  "end": 301
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "signedZero",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 304,
                  "end": 314
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 298,
                "end": 314
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": "-0",
                  "raw": "\"-0\"",
                  "start": 317,
                  "end": 321
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "negativeZeroString",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 324,
                  "end": 342
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 316,
                "end": 342
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 297,
            "end": 343
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null,
              "start": 346,
              "end": 353
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "./a",
                "raw": "\"./a\"",
                "start": 354,
                "end": 359
              }
            ],
            "optional": false,
            "start": 346,
            "end": 360
          },
          "definite": false,
          "start": 297,
          "end": 360
        }
      ],
      "declare": false,
      "start": 291,
      "end": 361
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
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 362,
            "end": 369
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "signedZero",
            "optional": false,
            "typeAnnotation": null,
            "start": 370,
            "end": 380
          },
          "optional": false,
          "computed": false,
          "start": 362,
          "end": 380
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "signedZero",
          "optional": false,
          "typeAnnotation": null,
          "start": 383,
          "end": 393
        },
        "start": 362,
        "end": 393
      },
      "directive": null,
      "start": 362,
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
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 395,
            "end": 402
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "negativeZeroString",
            "optional": false,
            "typeAnnotation": null,
            "start": 403,
            "end": 421
          },
          "optional": false,
          "computed": false,
          "start": 395,
          "end": 421
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "negativeZeroString",
          "optional": false,
          "typeAnnotation": null,
          "start": 424,
          "end": 442
        },
        "start": 395,
        "end": 442
      },
      "directive": null,
      "start": 395,
      "end": 443
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 443
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
    "type": "Punctuator",
    "value": "{",
    "start": 6,
    "end": 7
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 7,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "numeric",
    "start": 10,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 17,
    "end": 18
  },
  {
    "type": "String",
    "value": "\"a b\"",
    "start": 19,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 24,
    "end": 25
  },
  {
    "type": "Identifier",
    "value": "text",
    "start": 26,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 30,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "named",
    "start": 32,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 39,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 41,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 48,
    "end": 49
  },
  {
    "type": "String",
    "value": "\"./a\"",
    "start": 49,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 54,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 55,
    "end": 56
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 57,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 64,
    "end": 65
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 67,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "computedNumeric",
    "start": 69,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 86,
    "end": 87
  },
  {
    "type": "Template",
    "value": "`a b`",
    "start": 87,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 92,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 93,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "computedTemplate",
    "start": 95,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 111,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 113,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 115,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 122,
    "end": 123
  },
  {
    "type": "String",
    "value": "\"./a\"",
    "start": 123,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 128,
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
    "value": "exports",
    "start": 131,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 138,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "numeric",
    "start": 139,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 147,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "numeric",
    "start": 149,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 156,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 158,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 165,
    "end": 166
  },
  {
    "type": "Identifier",
    "value": "text",
    "start": 166,
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
    "value": "text",
    "start": 173,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 177,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 179,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 186,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "named",
    "start": 187,
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
    "value": "named",
    "start": 195,
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
    "value": "exports",
    "start": 202,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 209,
    "end": 210
  },
  {
    "type": "Identifier",
    "value": "computedNumeric",
    "start": 210,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 226,
    "end": 227
  },
  {
    "type": "Identifier",
    "value": "computedNumeric",
    "start": 228,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 243,
    "end": 244
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 245,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 252,
    "end": 253
  },
  {
    "type": "Identifier",
    "value": "computedTemplate",
    "start": 253,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 270,
    "end": 271
  },
  {
    "type": "Identifier",
    "value": "computedTemplate",
    "start": 272,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 288,
    "end": 289
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 291,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 297,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 298,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 299,
    "end": 300
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 300,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 301,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 302,
    "end": 303
  },
  {
    "type": "Identifier",
    "value": "signedZero",
    "start": 304,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 314,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 316,
    "end": 317
  },
  {
    "type": "String",
    "value": "\"-0\"",
    "start": 317,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 321,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 322,
    "end": 323
  },
  {
    "type": "Identifier",
    "value": "negativeZeroString",
    "start": 324,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 342,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 344,
    "end": 345
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 346,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 353,
    "end": 354
  },
  {
    "type": "String",
    "value": "\"./a\"",
    "start": 354,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 359,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 360,
    "end": 361
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 362,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 369,
    "end": 370
  },
  {
    "type": "Identifier",
    "value": "signedZero",
    "start": 370,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 381,
    "end": 382
  },
  {
    "type": "Identifier",
    "value": "signedZero",
    "start": 383,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 393,
    "end": 394
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 395,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 402,
    "end": 403
  },
  {
    "type": "Identifier",
    "value": "negativeZeroString",
    "start": 403,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 422,
    "end": 423
  },
  {
    "type": "Identifier",
    "value": "negativeZeroString",
    "start": 424,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 442,
    "end": 443
  }
]
```
