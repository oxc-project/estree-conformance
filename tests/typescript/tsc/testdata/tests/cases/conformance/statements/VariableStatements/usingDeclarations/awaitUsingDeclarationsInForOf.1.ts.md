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
            "await": false,
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
                    "start": 45,
                    "end": 47
                  },
                  "init": null,
                  "definite": false,
                  "start": 45,
                  "end": 47
                }
              ],
              "declare": false,
              "start": 33,
              "end": 47
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
                          "start": 61,
                          "end": 67
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "asyncDispose",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 68,
                          "end": 80
                        },
                        "optional": false,
                        "computed": false,
                        "start": 61,
                        "end": 80
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
                          "start": 84,
                          "end": 86
                        },
                        "expression": false,
                        "start": 81,
                        "end": 86
                      },
                      "method": true,
                      "shorthand": false,
                      "computed": true,
                      "optional": false,
                      "start": 54,
                      "end": 86
                    }
                  ],
                  "start": 52,
                  "end": 88
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
                          "start": 93,
                          "end": 99
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "dispose",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 100,
                          "end": 107
                        },
                        "optional": false,
                        "computed": false,
                        "start": 93,
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
                      "method": true,
                      "shorthand": false,
                      "computed": true,
                      "optional": false,
                      "start": 92,
                      "end": 113
                    }
                  ],
                  "start": 90,
                  "end": 115
                },
                {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 117,
                  "end": 121
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 123,
                  "end": 132
                }
              ],
              "start": 51,
              "end": 133
            },
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 135,
              "end": 142
            },
            "start": 28,
            "end": 142
          }
        ],
        "start": 22,
        "end": 144
      },
      "expression": false,
      "start": 0,
      "end": 144
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 144
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
    "type": "Punctuator",
    "value": "(",
    "start": 32,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 33,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "using",
    "start": 39,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "d1",
    "start": 45,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 48,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 51,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 52,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 54,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 60,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 61,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 67,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "asyncDispose",
    "start": 68,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": ",",
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
    "value": "[",
    "start": 92,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 93,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 99,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "dispose",
    "start": 100,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 107,
    "end": 108
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
    "type": "Punctuator",
    "value": ",",
    "start": 115,
    "end": 116
  },
  {
    "type": "Null",
    "value": "null",
    "start": 117,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 121,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 123,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 132,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 133,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 143,
    "end": 144
  }
]
```
