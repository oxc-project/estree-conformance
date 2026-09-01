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
        "name": "TypeVariable",
        "optional": false,
        "typeAnnotation": null,
        "start": 71,
        "end": 83
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 84,
        "end": 86
      },
      "abstract": false,
      "declare": false,
      "start": 65,
      "end": 86
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null,
          "start": 101,
          "end": 102
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "TypeVariable",
                "optional": false,
                "typeAnnotation": null,
                "start": 103,
                "end": 115
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 103,
              "end": 115
            }
          ],
          "start": 102,
          "end": 116
        },
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "PropertyDefinition",
              "decorators": [
                {
                  "type": "Decorator",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Decorate",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 122,
                    "end": 130
                  },
                  "start": 121,
                  "end": 130
                }
              ],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "member",
                "optional": false,
                "typeAnnotation": null,
                "start": 133,
                "end": 139
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TypeVariable",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 141,
                    "end": 153
                  },
                  "typeArguments": null,
                  "start": 141,
                  "end": 153
                },
                "start": 139,
                "end": 153
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
              "start": 121,
              "end": 154
            }
          ],
          "start": 117,
          "end": 156
        },
        "abstract": false,
        "declare": false,
        "start": 95,
        "end": 156
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 88,
      "end": 156
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 65,
  "end": 156
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 65,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "TypeVariable",
    "start": 71,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 85,
    "end": 86
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 88,
    "end": 94
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 95,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 102,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "TypeVariable",
    "start": 103,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 117,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 121,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "Decorate",
    "start": 122,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "member",
    "start": 133,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 139,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "TypeVariable",
    "start": 141,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 155,
    "end": 156
  }
]
```
