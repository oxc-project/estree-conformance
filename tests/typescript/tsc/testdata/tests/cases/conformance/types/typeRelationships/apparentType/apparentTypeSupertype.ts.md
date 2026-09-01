__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 214,
        "end": 218
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 225,
              "end": 226
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 228,
                "end": 234
              },
              "start": 226,
              "end": 234
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 225,
            "end": 235
          }
        ],
        "start": 219,
        "end": 237
      },
      "abstract": false,
      "declare": false,
      "start": 208,
      "end": 237
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null,
        "start": 354,
        "end": 361
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 362,
              "end": 363
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "String",
                "optional": false,
                "typeAnnotation": null,
                "start": 372,
                "end": 378
              },
              "typeArguments": null,
              "start": 372,
              "end": 378
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 362,
            "end": 378
          }
        ],
        "start": 361,
        "end": 379
      },
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 388,
        "end": 392
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 408,
              "end": 409
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 411,
                  "end": 412
                },
                "typeArguments": null,
                "start": 411,
                "end": 412
              },
              "start": 409,
              "end": 412
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 408,
            "end": 413
          }
        ],
        "start": 393,
        "end": 415
      },
      "abstract": false,
      "declare": false,
      "start": 348,
      "end": 415
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 208,
  "end": 415
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 208,
    "end": 213
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 214,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 219,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 225,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 226,
    "end": 227
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 228,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 234,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 236,
    "end": 237
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 348,
    "end": 353
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 354,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 361,
    "end": 362
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 362,
    "end": 363
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 364,
    "end": 371
  },
  {
    "type": "Identifier",
    "value": "String",
    "start": 372,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 378,
    "end": 379
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 380,
    "end": 387
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 388,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 393,
    "end": 394
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 408,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 409,
    "end": 410
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 411,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 412,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 414,
    "end": 415
  }
]
```
