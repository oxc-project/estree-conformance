__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 20,
                  "end": 21
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 17,
                "end": 21
              }
            ],
            "typeAnnotation": null,
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 16,
            "end": 22
          }
        ],
        "start": 12,
        "end": 24
      },
      "declare": false,
      "start": 0,
      "end": 24
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 24
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 0,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 10,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 12,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 16,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 17,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 20,
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
    "value": "}",
    "start": 23,
    "end": 24
  }
]
```
