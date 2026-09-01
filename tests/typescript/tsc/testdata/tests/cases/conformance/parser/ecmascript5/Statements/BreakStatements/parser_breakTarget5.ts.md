__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "target",
        "optional": false,
        "typeAnnotation": null,
        "start": 0,
        "end": 6
      },
      "body": {
        "type": "WhileStatement",
        "test": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 15,
          "end": 19
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 34,
                "end": 35
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "WhileStatement",
                    "test": {
                      "type": "Literal",
                      "value": true,
                      "raw": "true",
                      "start": 51,
                      "end": 55
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "BreakStatement",
                          "label": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "target",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 71,
                            "end": 77
                          },
                          "start": 65,
                          "end": 78
                        }
                      ],
                      "start": 57,
                      "end": 84
                    },
                    "start": 44,
                    "end": 84
                  }
                ],
                "start": 38,
                "end": 88
              },
              "expression": false,
              "start": 25,
              "end": 88
            }
          ],
          "start": 21,
          "end": 90
        },
        "start": 8,
        "end": 90
      },
      "start": 0,
      "end": 90
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 90
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "target",
    "start": 0,
    "end": 6
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6,
    "end": 7
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 8,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 14,
    "end": 15
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 15,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 19,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 21,
    "end": 22
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 25,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "f",
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
    "type": "Keyword",
    "value": "while",
    "start": 44,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 50,
    "end": 51
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 51,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 55,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 57,
    "end": 58
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 65,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "target",
    "start": 71,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 89,
    "end": 90
  }
]
```
