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
        "name": "JSONSchema4",
        "optional": false,
        "typeAnnotation": null,
        "start": 32,
        "end": 43
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 48,
              "end": 49
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 52,
                "end": 58
              },
              "start": 50,
              "end": 58
            },
            "accessibility": null,
            "static": false,
            "start": 48,
            "end": 58
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "extends",
              "optional": false,
              "typeAnnotation": null,
              "start": 61,
              "end": 68
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 71,
                    "end": 77
                  },
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 80,
                      "end": 86
                    },
                    "start": 80,
                    "end": 88
                  }
                ],
                "start": 71,
                "end": 88
              },
              "start": 69,
              "end": 88
            },
            "accessibility": null,
            "static": false,
            "start": 61,
            "end": 88
          }
        ],
        "start": 44,
        "end": 90
      },
      "declare": false,
      "start": 22,
      "end": 90
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 90
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 22,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "JSONSchema4",
    "start": 32,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 44,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 48,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 50,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 52,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "extends",
    "start": 61,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 69,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 71,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 78,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 80,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "]",
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
