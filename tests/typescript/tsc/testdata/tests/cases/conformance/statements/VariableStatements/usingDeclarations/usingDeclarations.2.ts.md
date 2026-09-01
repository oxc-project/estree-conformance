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
                        "start": 62,
                        "end": 68
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "dispose",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 69,
                        "end": 76
                      },
                      "optional": false,
                      "computed": false,
                      "start": 62,
                      "end": 76
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
                        "start": 80,
                        "end": 82
                      },
                      "expression": false,
                      "start": 77,
                      "end": 82
                    },
                    "method": true,
                    "shorthand": false,
                    "computed": true,
                    "optional": false,
                    "start": 61,
                    "end": 82
                  }
                ],
                "start": 59,
                "end": 84
              },
              "definite": false,
              "start": 54,
              "end": 84
            }
          ],
          "declare": false,
          "start": 6,
          "end": 85
        }
      ],
      "start": 0,
      "end": 87
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 87
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
    "type": "Punctuator",
    "value": "{",
    "start": 59,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 61,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 62,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 68,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "dispose",
    "start": 69,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 86,
    "end": 87
  }
]
```
