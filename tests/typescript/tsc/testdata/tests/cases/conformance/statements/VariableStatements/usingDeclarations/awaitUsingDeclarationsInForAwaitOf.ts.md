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
        "name": "main",
        "optional": false,
        "typeAnnotation": null,
        "start": 15,
        "end": 19
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ForOfStatement",
            "await": true,
            "left": {
              "type": "VariableDeclaration",
              "kind": "await using",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 51,
                    "end": 53
                  },
                  "init": null,
                  "definite": false,
                  "start": 51,
                  "end": 53
                }
              ],
              "declare": false,
              "start": 39,
              "end": 53
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Symbol",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 67,
                          "end": 73
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "asyncDispose",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 74,
                          "end": 86
                        },
                        "optional": false,
                        "computed": false,
                        "start": 67,
                        "end": 86
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "id": null,
                        "generator": false,
                        "async": true,
                        "declare": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 90,
                          "end": 92
                        },
                        "expression": false,
                        "start": 87,
                        "end": 92
                      },
                      "method": true,
                      "shorthand": false,
                      "computed": true,
                      "optional": false,
                      "start": 60,
                      "end": 92
                    }
                  ],
                  "start": 58,
                  "end": 94
                },
                {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Symbol",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 99,
                          "end": 105
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "dispose",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 106,
                          "end": 113
                        },
                        "optional": false,
                        "computed": false,
                        "start": 99,
                        "end": 113
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
                          "start": 117,
                          "end": 119
                        },
                        "expression": false,
                        "start": 114,
                        "end": 119
                      },
                      "method": true,
                      "shorthand": false,
                      "computed": true,
                      "optional": false,
                      "start": 98,
                      "end": 119
                    }
                  ],
                  "start": 96,
                  "end": 121
                },
                {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 123,
                  "end": 127
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 129,
                  "end": 138
                }
              ],
              "start": 57,
              "end": 139
            },
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 141,
              "end": 148
            },
            "start": 28,
            "end": 148
          }
        ],
        "start": 22,
        "end": 150
      },
      "expression": false,
      "start": 0,
      "end": 150
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 150
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "async",
    "start": 0,
    "end": 5
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 6,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "main",
    "start": 15,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 19,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 20,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 22,
    "end": 23
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 28,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 32,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 38,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 39,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "using",
    "start": 45,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "d1",
    "start": 51,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 54,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 58,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 60,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 66,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 67,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 73,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "asyncDispose",
    "start": 74,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 88,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 98,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 99,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 105,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "dispose",
    "start": 106,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 114,
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
    "type": "Punctuator",
    "value": ",",
    "start": 121,
    "end": 122
  },
  {
    "type": "Null",
    "value": "null",
    "start": 123,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 127,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 129,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 149,
    "end": 150
  }
]
```
