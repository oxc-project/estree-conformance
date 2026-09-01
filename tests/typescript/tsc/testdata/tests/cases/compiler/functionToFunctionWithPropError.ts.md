__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 21,
                        "end": 27
                      },
                      "start": 19,
                      "end": 27
                    },
                    "start": 17,
                    "end": 28
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "prop",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 29,
                      "end": 33
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 35,
                        "end": 41
                      },
                      "start": 33,
                      "end": 41
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 29,
                    "end": 41
                  }
                ],
                "start": 15,
                "end": 43
              },
              "start": 13,
              "end": 43
            },
            "start": 12,
            "end": 43
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 43
        }
      ],
      "declare": true,
      "start": 0,
      "end": 44
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 66,
                        "end": 72
                      },
                      "start": 64,
                      "end": 72
                    },
                    "start": 62,
                    "end": 73
                  }
                ],
                "start": 60,
                "end": 75
              },
              "start": 58,
              "end": 75
            },
            "start": 57,
            "end": 75
          },
          "init": null,
          "definite": false,
          "start": 57,
          "end": 75
        }
      ],
      "declare": true,
      "start": 45,
      "end": 75
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 77,
          "end": 78
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null,
          "start": 81,
          "end": 82
        },
        "start": 77,
        "end": 82
      },
      "directive": null,
      "start": 77,
      "end": 83
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null,
          "start": 84,
          "end": 85
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 88,
          "end": 89
        },
        "start": 84,
        "end": 89
      },
      "directive": null,
      "start": 84,
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
    "value": "declare",
    "start": 0,
    "end": 7
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 8,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 12,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 13,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 15,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 17,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 18,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 19,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 21,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 27,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 29,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 33,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 35,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 43,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 45,
    "end": 52
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 53,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 58,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 60,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 62,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 64,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 66,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "value": "x",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 79,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 82,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 86,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 88,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 89,
    "end": 90
  }
]
```
