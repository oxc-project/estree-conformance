__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "VariableDeclaration",
          "kind": "using",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "d1",
                "optional": false,
                "typeAnnotation": null,
                "start": 12,
                "end": 14
              },
              "init": {
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
                        "start": 20,
                        "end": 26
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "dispose",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 27,
                        "end": 34
                      },
                      "optional": false,
                      "computed": false,
                      "start": 20,
                      "end": 34
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
                        "start": 38,
                        "end": 40
                      },
                      "expression": false,
                      "start": 35,
                      "end": 40
                    },
                    "method": true,
                    "shorthand": false,
                    "computed": true,
                    "optional": false,
                    "start": 19,
                    "end": 40
                  }
                ],
                "start": 17,
                "end": 42
              },
              "definite": false,
              "start": 12,
              "end": 42
            },
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "d2",
                "optional": false,
                "typeAnnotation": null,
                "start": 54,
                "end": 56
              },
              "init": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 59,
                "end": 63
              },
              "definite": false,
              "start": 54,
              "end": 63
            },
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "d3",
                "optional": false,
                "typeAnnotation": null,
                "start": 75,
                "end": 77
              },
              "init": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 80,
                "end": 89
              },
              "definite": false,
              "start": 75,
              "end": 89
            },
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "d4",
                "optional": false,
                "typeAnnotation": null,
                "start": 101,
                "end": 103
              },
              "init": {
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
                        "start": 109,
                        "end": 115
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "dispose",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 116,
                        "end": 123
                      },
                      "optional": false,
                      "computed": false,
                      "start": 109,
                      "end": 123
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
                        "start": 127,
                        "end": 129
                      },
                      "expression": false,
                      "start": 124,
                      "end": 129
                    },
                    "method": true,
                    "shorthand": false,
                    "computed": true,
                    "optional": false,
                    "start": 108,
                    "end": 129
                  }
                ],
                "start": 106,
                "end": 131
              },
              "definite": false,
              "start": 101,
              "end": 131
            }
          ],
          "declare": false,
          "start": 6,
          "end": 132
        }
      ],
      "start": 0,
      "end": 134
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 134
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Punctuator",
    "value": "{",
    "start": 0,
    "end": 1
  },
  {
    "type": "Identifier",
    "value": "using",
    "start": 6,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "d1",
    "start": 12,
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
    "value": "[",
    "start": 19,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 20,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 26,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "dispose",
    "start": 27,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 35,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 41,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 42,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "d2",
    "start": 54,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 57,
    "end": 58
  },
  {
    "type": "Null",
    "value": "null",
    "start": 59,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 63,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "d3",
    "start": 75,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 78,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 80,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 89,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "d4",
    "start": 101,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 104,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 108,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 109,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 115,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "dispose",
    "start": 116,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 124,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 130,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 133,
    "end": 134
  }
]
```
