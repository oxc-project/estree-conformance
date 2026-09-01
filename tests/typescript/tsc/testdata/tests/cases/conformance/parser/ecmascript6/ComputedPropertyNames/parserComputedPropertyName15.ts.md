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
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "e",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 13,
                            "end": 19
                          },
                          "start": 11,
                          "end": 19
                        },
                        "start": 10,
                        "end": 19
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 22,
                        "end": 28
                      },
                      "start": 20,
                      "end": 28
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 9,
                    "end": 29
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": true,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "e",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 31,
                      "end": 32
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
                    "start": 30,
                    "end": 41
                  }
                ],
                "start": 7,
                "end": 43
              },
              "start": 5,
              "end": 43
            },
            "start": 4,
            "end": 43
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 43
        }
      ],
      "declare": false,
      "start": 0,
      "end": 44
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 44
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
    "start": 9,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 10,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 11,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 13,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 19,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 20,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 22,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 28,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 30,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 31,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 32,
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
  }
]
```
