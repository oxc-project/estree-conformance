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
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 11,
                      "end": 12
                    },
                    "typeAnnotation": null,
                    "accessibility": null,
                    "static": false,
                    "start": 11,
                    "end": 12
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 15,
                      "end": 16
                    },
                    "typeAnnotation": null,
                    "accessibility": null,
                    "static": false,
                    "start": 15,
                    "end": 16
                  }
                ],
                "start": 7,
                "end": 18
              },
              "start": 5,
              "end": 18
            },
            "start": 4,
            "end": 18
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 18
        }
      ],
      "declare": false,
      "start": 0,
      "end": 19
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 19
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
    "type": "Identifier",
    "value": "x",
    "start": 11,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 15,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 17,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 18,
    "end": 19
  }
]
```
