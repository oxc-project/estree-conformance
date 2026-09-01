__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "v",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": "",
                        "raw": "\"\"",
                        "start": 14,
                        "end": 16
                      },
                      "operator": "+",
                      "right": {
                        "type": "Literal",
                        "value": "",
                        "raw": "\"\"",
                        "start": 19,
                        "end": 21
                      },
                      "start": 14,
                      "end": 21
                    },
                    "computed": true,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 26,
                        "end": 30
                      },
                      "start": 24,
                      "end": 30
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 13,
                    "end": 31
                  }
                ],
                "start": 7,
                "end": 33
              },
              "start": 5,
              "end": 33
            },
            "start": 4,
            "end": 33
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 33
        }
      ],
      "declare": false,
      "start": 0,
      "end": 33
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 33
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 0,
    "end": 3
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 4,
    "end": 5
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5,
    "end": 6
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 13,
    "end": 14
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 14,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 17,
    "end": 18
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 19,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 21,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 22,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 23,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 24,
    "end": 25
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 26,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 32,
    "end": 33
  }
]
```
